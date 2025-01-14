const express = require('express');
const router = express.Router();
const zod = require("zod");
const { User, Booking } = require("../db");
const { authMiddleware } = require("../middleware");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");


const signupBody = zod.object({
    fullName: zod.string(),
    phone: zod.string(),
    email: zod.string().email(),
	password: zod.string()
})


//Signup
router.post("/signup", async (req, res) => {
    const { success } = signupBody.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        });
    }

    // Check for existing user by email or phone
    const existingUser = await User.findOne({
        $or: [
            { email: req.body.email },
            { phone: req.body.phone }
        ]
    });

    if (existingUser) {
        return res.json({
            status: "411",
            message: existingUser.email === req.body.email 
                ? "Email already taken" 
                : "Phone already taken"
        });
    }

    // Create a new user
    const user = await User.create({
        fullName: req.body.fullName,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password
    });
    const userId = user._id;

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token,
        fullName: user.fullName
    });
});


//Signin
const signinBody = zod.object({
    email: zod.string().email(),
	password: zod.string()
})

router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });

    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);

        res.json({
            token: token,
            fullName: user.fullName,
            message: "Signed in"
        })
        return;
    }

    
    res.status(411).json({
        message: "Error while logging in"
    })
})

//Profile
router.get("/profile", authMiddleware, async (req, res) => {
    try {
        // Fetch user data using the `userId` from the middleware
        const user = await User.findById(req.userId).select("fullName phone email");
        const bookingData = await Booking.find({user:req.userId})

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        else if(!bookingData.length){
            return res.json({
                fullName: user.fullName,
                phone: user.phone,
                email: user.email
            });
        }

        // Return user profile data
        res.json({
            fullName: user.fullName,
            phone: user.phone,
            email: user.email,
            booked: bookingData
        });
    } catch (error) {
        console.error("Error fetching profile:", error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
});

// Booking
const bookingBody = zod.object({
    service: zod.z.enum(["Pet Nursing", "Pet Grooming", "Pet Walking"]),
    day: zod.string().regex(/^\d{1,2}$/, "Invalid day format"),
    month: zod.string().regex(/^\d{1,2}$/, "Invalid month format"),
    year: zod.string().regex(/^\d{4}$/, "Invalid year format"),
    hour: zod.string().regex(/^\d{1,2}$/, "Invalid hour format"),
    minute: zod.string().regex(/^\d{1,2}$/, "Invalid minute format"),
    ampm: zod.enum(["AM", "PM"]),
    place: zod.string(),
    email: zod.string().email()
});

router.post("/booking", async (req, res) => {
    // Validate the request body
    const { success, data, error } = bookingBody.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message: "Incorrect inputs",
            error: error.errors
        });
    }

    try {
        // Format date as DD/MM/YY
        const appointmentDate = `${data.day.padStart(2, "0")}/${data.month.padStart(2, "0")}/${data.year.slice(2)}`;

        // Format time as HH:MM AM/PM
        const hour = data.hour.padStart(2, "0");
        const minute = data.minute.padStart(2, "0");
        const appointmentTime = `${hour}:${minute} ${data.ampm}`;

        // Find the user by email
        const userData = await User.findOne({ email: data.email });
        if (!userData) {
            return res.status(404).json({
                message: "Email is not registered"
            });
        }

        // Create a new booking
        const newBooking = await Booking.create({
            service: data.service,
            appointmentDate,
            appointmentTime,
            place: data.place,
            user: userData._id
        });

        return res.json({
            message: "Booking confirmed",
            booking: newBooking
        });
    } catch (error) {
        console.error("Error during booking:", error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});

module.exports = router;
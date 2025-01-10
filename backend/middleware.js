const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Check if the Authorization header exists and starts with 'Bearer '
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            message: "Authorization header is missing or invalid"
        });
    }

    const token = authHeader.split(' ')[1];

    try {
        // Verify the JWT and decode it
        const decoded = jwt.verify(token, JWT_SECRET);

        // Attach user ID to the request object
        req.userId = decoded.userId;

        // Proceed to the next middleware or route handler
        next();
    } catch (err) {
        console.error("JWT verification error:", err);
        return res.status(403).json({
            message: "Invalid or expired token"
        });
    }
};

module.exports = {
    authMiddleware
};

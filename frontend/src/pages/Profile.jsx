import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"; // Import the arrow icon
import dogFoot from "../assets/dogFoot.png";
import dogFoot2 from "../assets/dogFoot2.png";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [bookings, setBookings] = useState([]); // State to store bookings data
  const navigate = useNavigate();

  // Extract initials from full name
  const getInitials = (name) => {
    if (!name) return ""; // Handle case where name is undefined
    const nameArray = name.split(" ");
    if (nameArray.length === 1) return nameArray[0].charAt(0).toUpperCase(); // For single name
    return (
      nameArray[0].charAt(0).toUpperCase() +
      nameArray[1].charAt(0).toUpperCase() // First letter of first and last name
    );
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/signin");
    }

    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data); // Check if the data is returned as expected
        setUserData(response.data);
        setBookings(response.data.booked); // Set booking data here
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchData();
  }, [navigate]);

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token from localStorage
    localStorage.removeItem("fullName"); // Remove user name from localStorage
    navigate("/home"); // Redirect to home page
  };

  // Handle Back Button
  const handleBack = () => {
    navigate("/home");
  };

  return (
    <div className="h-full w-full">
      <div className="bg-[#F2E3BC] flex flex-col gap-14 py-20">
        {/* Back Button */}
        <div className="absolute top-6 left-6 md:top-10 md:left-10 lg:top-12 lg:left-12 cursor-pointer">
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="xl"
            className="text-[#031D44] hover:scale-110 ease-in duration-200"
            onClick={handleBack}
          />
        </div>

        {/* Paw Images */}
        <div className="absolute right-[15%] bottom-[50%] md:right-[72%] md:bottom-[80%] lg:right-[72%] lg:bottom-[70%]">
          <img
            className="h-16 w-16 md:h-32 md:w-32 xl:h-40 xl:w-40 object-contain opacity-40 -rotate-45"
            src={dogFoot2}
            alt="Bottom Right"
          />
        </div>
        <div className="absolute right-[20%] bottom-[65%] md:right-[30%] md:bottom-[75%] lg:right-[35%] lg:bottom-[60%]">
          <img
            className="h-16 w-16 md:h-32 md:w-32 xl:h-40 xl:w-40 object-contain opacity-35 -rotate-90"
            src={dogFoot}
            alt="Top Left"
          />
        </div>
        <div className="absolute right-[60%] bottom-[70%] md:right-[55%] md:bottom-[50%] lg:right-[60%] lg:bottom-[30%]">
          <img
            className="h-16 w-16 md:h-32 md:w-32 xl:h-40 xl:w-40 object-contain opacity-40 -rotate-45"
            src={dogFoot2}
            alt="Bottom Left"
          />
        </div>
        <div className="absolute right-[65%] bottom-[85%] md:right-[8%] md:bottom-[45%] lg:right-[10%] lg:bottom-[10%]">
          <img
            className="h-16 w-16 md:h-32 md:w-32 xl:h-40 xl:w-40 object-contain opacity-35 -rotate-90"
            src={dogFoot}
            alt="Top Right"
          />
        </div>

        <div className="flex justify-center items-center">
          {userData && (
            <div className="flex items-center justify-center w-32 h-32 md:w-48 md:h-48 bg-[#031D44] text-[#F2E3BC] rounded-full cursor-pointer text-5xl font-bold">
              {getInitials(userData.fullName)}
            </div>
          )}
        </div>

        {userData ? (
          <div className="flex flex-col justify-center items-center md:gap-5">
            <h1 className="text-4xl md:text-6xl text-[#031D44] font-extrabold">
              {userData.fullName}
            </h1>
            <p className="text-[#031D44] text-md md:text-xl font-bold mt-4">
              Email: {userData.email}
            </p>
            <p className="text-[#031D44] text-md md:text-xl font-bold mt-2">
              Phone: {userData.phone}
            </p>
            {/* Add other user details here */}

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="flex justify-center text-center bg-[#031D44] text-[#F2E3BC] md:text-2xl font-bold lg:text-3xl px-6 py-2 md:px-16 md:py-6 mt-16 rounded-full"
            >
              Logout
            </button>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {/* Bookings */}
      <div className="">
        <div className="bg-[#031D44] text-[#F2E3BC] flex justify-center text-center text-4xl md:text-6xl font-bold py-20 lg:py-28">
          Bookings
        </div>

        {/* Booking details rendering */}
        {bookings && bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#F2E3BC] text-[#031D44] p-6 mb-6 rounded-lg shadow-lg max-w-md mx-auto"
            >
              <h2 className="text-2xl font-bold mb-2">{booking.service}</h2>
              <p className="text-lg font-semibold">{booking.place}</p>
              <p className="text-md">{booking.appointmentDate}</p>
              <p className="text-md">{booking.appointmentTime}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-lg text-[#031D44]">
            No bookings found
          </p>
        )}
      </div>
    </div>
  );
};

export default Profile;

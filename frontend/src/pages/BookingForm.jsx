import React, { useState } from "react";
import axios from "axios";
import bookingDog from "../assets/bookingDog.png";
import bookingCat from "../assets/bookingCat.png";
import bookingCatPhone from "../assets/bookingCatPhone.png";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    service: "",
    day: "",
    month: "",
    year: "",
    hour: "",
    minute: "",
    ampm: "AM",
    place: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation check for empty fields
    if (
      !formData.service ||
      !formData.day ||
      !formData.month ||
      !formData.year ||
      !formData.hour ||
      !formData.minute ||
      !formData.place ||
      !formData.email
    ) {
      alert("All fields are required!");
      return;
    }

    // Format the appointment date and time
    const formattedData = {
      service: formData.service,
      appointmentDate: `${formData.day}/${formData.month}/${formData.year}`,
      appointmentTime: `${formData.hour.padStart(
        2,
        "0"
      )}:${formData.minute.padStart(2, "0")} ${formData.ampm}`,
      place: formData.place,
      email: formData.email,
    };

    // API call to submit the form data using axios
    try {
      const response = await axios.post(
        "http://localhost:3000/user/booking",
        formattedData
      );

      if (response.status === 200) {
        alert("Booking confirmed!");
        console.log(response.data);
      } else {
        alert(response.data.message || "An error occurred.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(error.response?.data?.message || "Failed to submit booking.");
    }
  };

  return (
    <div className="bg-[#031D44] h-screen w-screen flex flex-col justify-center px-8">
      <div className="flex justify-center text-3xl text-[#F2E3BC] font-bold py-10">
        Book an Appointment
      </div>
      <form className="" onSubmit={handleSubmit}>
        {/* Service */}
        <div className="mb-4">
          <label className="block text-[#F2E3BC] text-lg mb-2">Service</label>
          <input
            type="text"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            placeholder="Enter service type"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Appointment Date */}
        <div className="mb-4">
          <label className="block text-[#F2E3BC] text-lg mb-2">
            Appointment Date
          </label>
          <div className="flex space-x-2">
            <input
              type="text"
              name="day"
              value={formData.day}
              onChange={handleInputChange}
              placeholder="DD"
              className="w-1/3 p-2 border rounded text-center"
            />
            <input
              type="text"
              name="month"
              value={formData.month}
              onChange={handleInputChange}
              placeholder="MM"
              className="w-1/3 p-2 border rounded text-center"
            />
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleInputChange}
              placeholder="YYYY"
              className="w-1/3 p-2 border rounded text-center"
            />
          </div>
        </div>

        {/* Appointment Time */}
        <div className="mb-4">
          <label className="block text-[#F2E3BC] text-lg mb-2">
            Appointment Time
          </label>
          <div className="flex space-x-2">
            <input
              type="text"
              name="hour"
              value={formData.hour}
              onChange={handleInputChange}
              placeholder="HH"
              className="w-1/3 p-2 border rounded text-center"
            />
            <input
              type="text"
              name="minute"
              value={formData.minute}
              onChange={handleInputChange}
              placeholder="MM"
              className="w-1/3 p-2 border rounded text-center"
            />
            <select
              name="ampm"
              value={formData.ampm}
              onChange={handleInputChange}
              className="w-1/3 p-2 border rounded text-center"
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
        </div>

        {/* Place */}
        <div className="mb-4">
          <label className="block text-[#F2E3BC] text-lg mb-2">Place</label>
          <input
            type="text"
            name="place"
            value={formData.place}
            onChange={handleInputChange}
            placeholder="Enter place"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-[#F2E3BC] text-lg mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="w-full p-2 border rounded mb-8"
          />
        </div>

        <div className="w-full flex justify-center items-center">
          {/* Submit Button */}
          <button
            type="submit"
            className="w-[55%] bg-[#F2E3BC] text-[#031D44] py-4 rounded-full text-lg font-bold"
          >
            Submit Booking
          </button>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <img src={bookingCatPhone} className="w-44" alt="" />
        </div>
      </form>
    </div>
  );
};

export default BookingForm;

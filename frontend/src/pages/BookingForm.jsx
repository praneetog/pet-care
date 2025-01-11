import React, { useState } from "react";
import axios from "axios";

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
    email: ""
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
      appointmentTime: `${formData.hour.padStart(2, "0")}:${formData.minute.padStart(2, "0")} ${formData.ampm}`,
      place: formData.place,
      email: formData.email
    };

    // API call to submit the form data using axios
    try {
      const response = await axios.post("http://localhost:3000/user/booking", formattedData);

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
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        {/* Service */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Service</label>
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
          <label className="block text-gray-700 mb-2">Appointment Date</label>
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
          <label className="block text-gray-700 mb-2">Appointment Time</label>
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
          <label className="block text-gray-700 mb-2">Place</label>
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
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;

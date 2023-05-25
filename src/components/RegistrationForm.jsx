import React, { useState } from "react";

const RegistrationForm = ({ wAddress }) => {
  const [isChecked, setIsChecked] = useState(true);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [usn, setUsn] = useState("");

  const handleRegister = () => {
    const data = {
      fName,
      lName,
      email,
      phone,
      usn,
      role: isChecked ? "student" : "professor",
      wAddress,
    };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error Registering User:", error);
      });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div className="bg-gradient-to-b from-[#751763] to-[#1c002b] bg-cover  rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-lg font-medium mb-4 text-white">Register</h2>
        <p className=" text-white mb-1">First Name</p>
        <input
          className="border border-gray-400 p-2 mb-4 w-full rounded-md"
          placeholder="Enter your First Name"
          value={fName}
          onChange={(e) => setFName(e.target.value)}
        />
        <p className=" text-white mb-1">Last Name</p>
        <input
          className="border border-gray-400 p-2 mb-4 w-full rounded-md"
          placeholder="Enter your Last Name"
          value={lName}
          onChange={(e) => setLName(e.target.value)}
        />
        <p className=" text-white mb-1">Email</p>
        <input
          className="border border-gray-400 p-2 mb-4 w-full rounded-md"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className=" text-white mb-1">Phone</p>
        <input
          className="border border-gray-400 p-2 mb-4 w-full rounded-md"
          placeholder="Enter your Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {/* checkbox */}
        <div className="flex mb-2 items-center">
          <input
            type="checkbox"
            className="h-5 w-5 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <p className=" text-white ml-2">I am a Student</p>
        </div>

        {isChecked && <p className=" text-white mb-1">USN</p>}
        {isChecked && (
          <input
            className="border border-gray-400 p-2 mb-4 w-full rounded-md"
            placeholder="Enter your USN"
            value={usn}
            onChange={(e) => setUsn(e.target.value)}
          />
        )}

        <button
          className="bg-[#0EA5E9] text-white py-2 px-4 rounded w-full"
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;

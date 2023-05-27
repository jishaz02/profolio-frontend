import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import TeamCard from "../components/TeamCard";
import Discussion from "../assets/images/blue.png";

const Teambuilder = () => {
  const [topic, setTopic] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [description, setDescription] = useState("");

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [teams, setTeams] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    const newTeam = {
      topic,
      name: teamName,
      size: teamSize,
      description,
      leader: localStorage.getItem("account"),
    };
    fetch("https://profolio-backend-new.onrender.com/teams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTeam),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error adding team:", error);
      });
  };

  const handleButtonClick = () => {
    setIsFormVisible(true);
  };

  useEffect(() => {
    fetch("https://profolio-backend-new.onrender.com/teams")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setTeams(data);
      })
      .catch((error) => {
        console.error("Error retrieving User:", error);
      });
  }, []);

  return (
    <div className=" w-full min-h-screen bg-[#0B1120]">
      <nav className="flex justify-between items-center absolute top-0 left-0 w-full p-8">
        <div className=" flex items-center">
          <img className=" w-9 h-9" src={Discussion} alt="" />
          <div className=" text-3xl font-medium text-white px-4">
            Team Builder
          </div>
        </div>
        <ul className="flex">
          <li className="mx-2 mt-1">
            <NavLink
              to="/"
              exact
              className="text-white hover:text-[#0EA5E9] font-semibold px-4 py-4 "
              activeClassName="text-gray-800 underline"
            >
              Home
            </NavLink>
          </li>

          <li className="mx-2">
            <button
              onClick={handleButtonClick}
              className=" text-white bg-[#02141d] rounded-lg border-white hover:text-[#0EA5E9] hover:border-[#0EA5E9]"
            >
              Create Team
            </button>
          </li>
        </ul>
      </nav>
      {/* Card Contents*/}

      <div className="container ml-2 py-28">
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-2">
          {teams.map((team, index) => (
            <TeamCard key={index} data={team} />
          ))}
        </div>
      </div>

      {isFormVisible && ( // If isFormVisible is true, then render the form
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="bg-gradient-to-b from-[#751763] to-[#1c002b] bg-cover  rounded-lg shadow-lg p-6 w-96">
            <form onSubmit={handleSubmit} className="w-64">
              <div className="mb-4 ">
                <label
                  htmlFor="topic"
                  className="block mb-2 text-sm font-medium text-white "
                >
                  Event Name
                </label>
                <input
                  type="text"
                  id="topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className=" w-[335px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="teamName"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Team Name
                </label>
                <input
                  type="text"
                  id="teamName"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  className="w-[335px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="teamSize"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Team Size
                </label>
                <input
                  type="number"
                  id="teamSize"
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                  className="w-[335px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-[335px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-[335px] py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Teambuilder;

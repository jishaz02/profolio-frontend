import React, { useEffect, useState } from "react";

const TeamCard = ({ data }) => {
  const handleJoinTeam = () => {
    // Perform join team logic here
    const newMember = {
      member: localStorage.getItem("account"),
    };
    fetch(
      `https://profolio-backend-new.onrender.com/teams/${data._id}/members`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMember),
      }
    )
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

  return (
    <div className="max-w-md mx-auto bg-[#1E293B] rounded-lg shadow-lg p-4 w-[800px]  overflow-hidden">
      <div className="relative">
        <button
          className={`absolute top-0 right-0 ${
            data.members.includes(localStorage.getItem("account"))
              ? "bg-green-500"
              : "bg-blue-500"
          } hover:bg-green-600 text-white font-medium py-2 px-4 rounded`}
          onClick={handleJoinTeam}
          disabled={data.members.includes(localStorage.getItem("account"))}
        >
          {data.members.includes(localStorage.getItem("account"))
            ? "Joined"
            : "Join Team"}
        </button>
        <div className="px-4 py-4">
          <h3 className="text-xl font-medium text-white mb-4">{data.topic}</h3>
          <p className="text-sm text-white mb-4">Team Name: {data.name}</p>
          <p className="text-sm text-white mb-4">Team Size: {data.size}</p>
          <p className="text-white">Description: {data.description}</p>
        </div>
      </div>
      <div className="px-4 py-3">
        <h4 className="text-md font-medium text-white mb-2">Team Members</h4>
        <ul className="text-sm text-white">
          {data.members.map((member, index) => (
            <Member
              key={index}
              member={member}
              isLeader={member === data.leader}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

const Member = ({ member, isLeader }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    fetch("https://profolio-backend-new.onrender.com/users/" + member)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((error) => {
        console.error("Error retrieving User:", error);
      });
  }, []);

  return (
    <div className="flex items-center">
      <p>{user && user.fName + " " + user.lName}</p>
      {isLeader && (
        <p className=" border rounded px-1 ml-2 border-green-500">Leader</p>
      )}
    </div>
  );
};

export default TeamCard;

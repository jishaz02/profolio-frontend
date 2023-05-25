import React, { useEffect, useState } from "react";

import DiscussNavbar from "../components/DiscussNavbar";
import AIML from "../assets/images/thinking.png";
import DSA from "../assets/images/algorithm.png";
import Math from "../assets/images/venn.png";
import Mechanical from "../assets/images/gear.png";
import SystemSoftware from "../assets/images/software.png";
import AddQuestion from "../components/AddQuestion";
import Card from "../components/card";
import AddAnswer from "../components/AddAnswer";

const DiscussionForum = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/forum/questions?topic=AIML")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setQuestions(data);
      })
      .catch((error) => {
        console.error("Error retrieving posts:", error);
      });
  }, []);

  const handleAddQuestion = (question) => {
    fetch("http://localhost:5000/forum/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(question),
    })
      .then((response) => response.json())
      .then((data) => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error Adding Question:", error);
      });
  };

  return (
    <div className=" w-full min-h-screen bg-[#0B1120]">
      {" "}
      {/*main container start point*/}
      <DiscussNavbar open={() => setShowPopup(true)} />{" "}
      {/*Sending the function as a prop to Navbar (Callback technique)*/}
      {showPopup && (
        <AddQuestion
          onClose={() => setShowPopup(false)}
          onSave={handleAddQuestion}
        />
      )}
      <div className=" flex justify-center items-center pt-20">
        {" "}
        {/*start point putting side bar and card in one row*/}
        {/*side bar start point*/}
        <div className=" w-40 py-20 mr-8 flex flex-col justify-start items-start fixed top-10 left-40">
          <button className=" bg-[#0EA5E9] text-white shadow-lg w-32 flex justify-center items-center font-semibold">
            {" "}
            All Topics
          </button>
          <div className=" flex mt-2">
            <img className=" rounded-md w-5 h-5 " src={AIML} alt="" />
            <p className=" px-2 font-serif text-white">AIML</p>
          </div>

          <div className=" flex mt-2">
            <img className=" rounded-md w-5 h-5 " src={DSA} alt="" />
            <p className=" px-2 font-serif text-white">DSA</p>
          </div>
          <div className=" flex mt-2">
            <img className=" rounded-md w-5 h-5 " src={Math} alt="" />
            <p className=" px-2 font-serif text-white">Math</p>
          </div>

          <div className=" flex mt-2">
            <img className=" rounded-md w-5 h-5 " src={Mechanical} alt="" />
            <p className=" px-2 font-serif text-white">Mechanical</p>
          </div>
          <div className=" flex mt-2">
            <img className=" rounded-md w-5 h-5 " src={SystemSoftware} alt="" />
            <p className=" px-2 font-serif text-white">System Software</p>
          </div>
        </div>{" "}
        {/*side bar end point*/}
        {/*Card*/}
        <div>
          {questions.map((question) => (
            <Card
              key={question._id}
              data={question}
              onSave={(answer) => {
                fetch(
                  "http://localhost:5000/forum/questions/" +
                    question._id +
                    "/answers",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(answer),
                  }
                )
                  .then((response) => response.json())
                  .then((data) => {
                    window.location.reload();
                  })
                  .catch((error) => {
                    console.error("Error Adding Question:", error);
                  });
              }}
            />
          ))}
        </div>
      </div>{" "}
      {/*end point putting side bar and card in one row*/}
    </div> /*main container end point*/
  );
};

export default DiscussionForum;

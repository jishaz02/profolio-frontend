import React, { useEffect, useState } from "react";
import AddAnswer from "./AddAnswer";

function Card({ data, onSave }) {
  const [showAnswerPopup, setShowAnswerPopup] = useState(false);
  const [name, setName] = useState("");
  const [answers, setAnswers] = useState([]);

  const handleAddAnswer = (answer) => {
    onSave(answer);
    setShowAnswerPopup(false);
  };

  useEffect(() => {
    fetch("http://localhost:5000/users/" + data.wAddress)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setName(data.fName + " " + data.lName);
      })
      .catch((error) => {
        console.error("Error retrieving User:", error);
      });

    answers.length == 0 &&
      data.answers.map(async (answer) => {
        const response = await fetch(
          "http://localhost:5000/forum/answers/" + answer
        );
        const ans = await response.json();
        const response2 = await fetch(
          "http://localhost:5000/users/" + ans.wAddress
        );
        const user = await response2.json();
        setAnswers((prev) => [...prev, { ans, user }]);
      });
  }, []);

  return (
    <div className="mb-3 flex justify-center ">
      {" "}
      {/*card container start point*/}
      {showAnswerPopup && (
        <AddAnswer
          onClose={() => setShowAnswerPopup(false)}
          onSave={handleAddAnswer}
        />
      )}
      <div className=" bg-[#1E293B] rounded-lg shadow-lg p-8 w-[800px]  ">
        <div className=" flex justify-between items-center">
          <div className="flex justify-center items-center">
            <p className=" mr-4 text-[#0EA5E9] font-bold text-lg">{name}</p>

            <div className=" border border-white rounded-full p-2 text-white h-8 flex justify-center items-center">
              {data.topic}
            </div>
          </div>
          <p className=" text-white">
            {data.createdAt.split("T")[0] +
              " " +
              data.createdAt.split("T")[1].slice(0, 5)}
          </p>
        </div>
        <div>
          {" "}
          {/*card content start point*/}
          <p className=" font-semibold my-2 text-white ">{data.question}</p>
          <hr className=" border-gray-500 my-2" />
          <p className=" text-lg text-white font-semibold mb-2">Answers</p>
          {answers &&
            answers.map((answer, index) => {
              const { ans, user } = answer;
              return (
                <div key={index}>
                  <div className="flex justify-between items-center">
                    <p className=" mr-4  text-[#0EA5E9]">
                      {user.fName + " " + user.lName}
                    </p>

                    <p className=" text-white">
                      {ans.createdAt.split("T")[0] +
                        " " +
                        ans.createdAt.split("T")[1].slice(0, 5)}
                    </p>
                  </div>
                  <p className=" text-gray-300 ">{ans.content}</p>
                </div>
              );
            })}
        </div>
        <div>
          {" "}
          {/*card content start point*/}
          <div className="mt-3 mb-[-22px]">
            <button
              className=" bg-[#0EA5E9] h-8 w-20 flex justify-center items-center p-2 py-2 ml-0 border-b  rounded-full font-sans border"
              onClick={() => {
                setShowAnswerPopup(true);
              }}
            >
              <p className=" text-white"> Answer </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

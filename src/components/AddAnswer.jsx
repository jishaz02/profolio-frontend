import React, { useState } from "react";

function AddAnswer({ onClose, onSave }) {
  const [answer, setAnswer] = useState("");

  const handleSave = () => {
    onSave({
      content: answer,
      wAddress: localStorage.getItem("account"),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div className="bg-gradient-to-b from-[#751763] to-[#1c002b] bg-cover  rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-lg font-medium mb-4 text-white">Add Answer</h2>
        <textarea
          className="border border-gray-400 p-2 mb-4 w-full"
          placeholder="Type your question here..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            className="bg-gray-200 text-gray-700 py-2 px-4 rounded mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-[#0EA5E9] text-white py-2 px-4 rounded"
            onClick={handleSave}
          >
            Post Answer
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddAnswer;

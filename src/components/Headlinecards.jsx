import React from "react";
import { Link } from "react-router-dom";
//0B1121
const Headlinecards = () => {
  return (
    <div className=" max-w-[1640px] mx-auto p-8 py-12 grid md:grid-cols-3 gap-24 bg-gradient-to-b from-cyan-500 to-[#211F35]">
      {/*Card */}
      <div className="w-full bg-[url('assets/images/portfoliopic.jpeg')] bg-center bg-cover rounded-xl text-white  shadow-lg hover:scale-105 duration-300">
        <p className=" font-bold text-xl px-2 pt-4 ">Portfolio</p>

        <button className=" hover:border-white bg-[#211F35] text-white mx-2 mt-36 mb-4">
          Explore
        </button>
      </div>
      {/*Card */}
      <div className="w-full bg-[url('assets/images/discussionforum.jpeg')] bg-center bg-cover rounded-xl text-white  shadow-lg hover:scale-105 duration-300">
        <p className=" font-bold text-xl px-2 pt-4 ">Discussion Forum</p>
        <Link to="/forum">
          <button className=" hover:border-white bg-[#211F35] text-white mx-2 mt-36 mb-4">
            Explore
          </button>
        </Link>
      </div>
      {/*Card */}
      <div className="w-full bg-[url('assets/images/articles.jpeg')] bg-center bg-cover rounded-xl text-white shadow-lg hover:scale-105 duration-300">
        <p className=" font-bold text-xl px-2 pt-4 ">Articles</p>
        <button
          className=" hover:border-white bg-[#211F35] text-white mx-2 mt-36 mb-4"
          onClick={() => {
            window.location.href = "https://articles-peach.vercel.app/";
          }}
        >
          Explore
        </button>
      </div>
      {/*Card */}
      <div className="w-full bg-[url('assets/images/teambuilder.jpeg')] bg-center bg-cover rounded-xl text-white  shadow-lg hover:scale-105 duration-300">
        <p className=" font-bold text-xl px-2 pt-4 ">Team Builder</p>
        <Link to="/teambuilder">
          <button className=" hover:border-white bg-[#211F35] text-white mx-2 mt-36 mb-4">
            Explore
          </button>
        </Link>
      </div>
      {/*Card */}
      <div className="w-full bg-[url('assets/images/resumebuilder.jpeg')] bg-center bg-cover rounded-xl text-white  shadow-lg hover:scale-105 duration-300">
        <p className=" font-bold text-xl px-2 pt-4 ">Resume Builder</p>
        <button className=" hover:border-white bg-[#211F35] text-white mx-2 mt-36 mb-4">
          Explore
        </button>
      </div>
      {/*Card */}
      <div className="w-full bg-[url('assets/images/technews.jpeg')] bg-center bg-cover rounded-xl text-white  shadow-lg hover:scale-105 duration-300">
        <p className=" font-bold text-xl px-2 pt-4 ">Tech News</p>
        <Link to="/news">
          <button className=" hover:border-white bg-[#211F35] text-white mx-2 mt-36 mb-4">
            Explore
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Headlinecards;

import React from 'react'
import Chat from '../assets/images/chat.png'
import { NavLink } from 'react-router-dom';

const DiscussNavbar = (props) => {
  return (
    <div>
     <nav className="flex justify-between items-center absolute top-0 left-0 w-full p-8">
       <div className=' flex items-center'>
        <img className=' w-9 h-9'  src={Chat} alt="" />
      <div className=" text-3xl font-medium text-white px-4">Discussion Forum</div>
      </div>
      <ul className="flex">
        <li className="mx-2">
          <NavLink
            to="/"
            exact
            className="text-white hover:text-[#0EA5E9] font-semibold "
            activeClassName="text-gray-800 underline">
            Home
          </NavLink>
        </li>
        <li className="mx-2">
          <NavLink
            to="/topic"
            className="text-white hover:text-[#0EA5E9] font-semibold "
            activeClassName="text-gray-800 underline"
          >
            Topics
          </NavLink>
        </li>
        <li className="mx-2">
          <button
            className="text-white hover:text-[#0EA5E9] font-semibold border-none p-0"
            activeClassName="text-gray-800 underline"
            onClick={props.open} // this is the function that we passed from DiscussionForm.jsx
          >
            Add Question
          </button>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default DiscussNavbar

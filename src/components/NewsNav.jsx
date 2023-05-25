import React from 'react'
import New from '../assets/images/newspaper.png'
import Tech from '../assets/images/technews.jpg'
import Techi from '../assets/images/tech2news.jpg'
import Techo from '../assets/images/tech3news.jpg'
import Techlo from '../assets/images/technology.jpg'
import { NavLink } from 'react-router-dom';

function NewsNav() {
    return (
        <div>
            <nav className="flex justify-between items-center absolute top-0 left-0 w-full p-8">
                <div className=' flex items-center'>
                    <img className=' w-9 h-9' src={New} alt="" />
                    <div className=" text-3xl font-medium text-white px-4">Technology News</div>
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
                            to="/news"
                            className="text-white hover:text-[#0EA5E9] font-semibold "
                            activeClassName="text-gray-800 underline">
                            Tech News
                        </NavLink>
                    </li>
                </ul>
            </nav>
           
            <div className=' flex' >
            {/* upper one left picture */}
           <img className=' pt-24 pr-2 pl-12 w-[800px] h-[400px] '  src={Tech} alt="" />
            <div>
                 {/* upper one right picture */}
            <img className=' pt-24 pr-12 w-[800px] h-[220px] '  src={Techi} alt="" />
            {/* lower two pictures */}
            <div className='  flex '>
            <img className=' pt-2 pr-2 w-[350px] h-[180px] '  src={Techo} alt="" />
            <img className=' pt-2 w-[360px] h-[180px] '  src={Techlo} alt="" />
            
            </div> 
           
            </div>
            </div>
            
           
        </div>
    );
}


    export default NewsNav
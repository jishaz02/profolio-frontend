import React, { useState } from "react";

import Profolio from "../assets/images/pri.png";

import ConnectWalletButton from "./ConnectWalletButton";

const Navbar = ({ setAccountsList }) => {
  //first one is the state/value and second one is the function to change the state
  //useState is a React hook
  const [nav, setNav] = useState(false);

  return (
    //normally the items inside container by default comes down after one but using flex places them in a row
    //justify means how to place items in a row

    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 bg-gradient-to-b from-[#211F35] to-cyan-500 shadow-lg">
      {" "}
      {/* Outer most container start point */}
      <div className=" flex items-center">
        {" "}
        {/* Left side start point */}
        {/* nav is a state, you use setNav(newValue) to change the state of nav */}
        {/*div onClick={()=> setNav(!nav)} className='cursor-pointer'*/}{" "}
        {/* cursor-pointer is used to make the icon clickable mouse changes to hand symbol */}
        <img className=" ml-8 w-10 h-10" src={Profolio} alt="" />
        {/* provides nav bar icon  */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-4 flex text-white font-sans">
          {/*sm meaning small screen mein it'll be 3xl and large screen it'll be 4xl*/}
          Profolio{/* title would be displayed below the icon */}
        </h1>
      </div>{" "}
      {/* Left side end point */}
      {/* Connect to wallet button*/}
      <ConnectWalletButton
        setAccountsList={(list) => {
          setAccountsList(list);
        }}
      />
      {/* Mobile menu */}
      {/* Overlay */}
      {nav ? (
        <div className=" bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;

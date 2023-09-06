import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-primary w-full overflow-hidden ">
      <div className={`sm:px-16 px-6 flex justify-center items-center`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <nav className="w-full flex py-6 justify-between items-center navbar">
            {/* Logo */}
            <FaComment size={35} className="text-blue-700" />
            <h1 className="text-2xl text-purple-700 px-3">EastNetDigital</h1>

            {/* Desktop Navigation */}
            <ul className="list-none sm:flex hidden justify-end items-center flex-1 text-uppercase space-x-4">
             
              <NavLink
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  active === "Home" ? "text-purple-700" : "text-dimWhite"
                }`}
                onClick={() => setActive("Home")}
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  active === "About" ? "text-purple-700" : "text-dimWhite"
                }`}
                onClick={() => setActive("About")}
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  active === "Login" ? "text-purple-700" : "text-dimWhite"
                }`}
                onClick={() => setActive("Login")}
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  active === "Signup" ? "text-purple-700" : "text-dimWhite"
                }`}
                onClick={() => setActive("Signup")}
                to="/signup"
              >
                Signup
              </NavLink>
            </ul>

            {/* Mobile Navigation */}
            <div className="sm:hidden flex flex-1 justify-end items-center">
              {toggle ? (
                <AiOutlineClose
                  className="w-[28px] h-[28px] object-contain"
                  onClick={() => setToggle(!toggle)}
                />
              ) : (
                <FiMenu
                  className="w-[28px] h-[28px] object-contain"
                  onClick={() => setToggle(!toggle)}
                />
              )}

              {/* Sidebar */}
              <div
                className={`${
                  !toggle ? "hidden" : "flex"
                } p-6 bg-orange-400 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
              >
                <ul className="list-none flex justify-end items-start flex-1 flex-col space-y-4">
                  <NavLink
                    className={`font-poppins font-normal cursor-pointer text-[16px] ${
                      active === "Home" ? "text-purple-700" : "text-dimWhite"
                    }`}
                    onClick={() => setActive("Home")}
                    to="/home"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === "About" ? "text-purple-700" : "text-dimWhite"
                    }`}
                    onClick={() => {
                      setActive("About");
                      setToggle(false);
                    }}
                    to="/about"
                  >
                    About
                  </NavLink>
                  <NavLink
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === "Login" ? "text-purple-700" : "text-dimWhite"
                    }`}
                    onClick={() => {
                      setActive("Login");
                      setToggle(false);
                    }}
                    to="/login"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === "Signup" ? "text-purple-700" : "text-dimWhite"
                    }`}
                    onClick={() => {
                      setActive("Signup");
                      setToggle(false);
                    }}
                    to="/signup"
                  >
                    Signup
                  </NavLink>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

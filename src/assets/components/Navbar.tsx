import { Link } from "react-router-dom";
import logo from "../images/Resida Logo.svg";
import { Button } from "./Button";
import { FC, useState } from "react";

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="fixed w-full left-0 top-4 h-[10vh] md:h-[12vh] z-50 bg-white border-b border-gray-100">
        <div className="flex items-center justify-between w-11/12 lg:w-10/12 mx-auto mt-2">
          {/* Logo */}
          <Link to="/" className="w-3/12 md:w-2/12 flex items-center gap-3">
            <img src={logo} alt="Macmay Logo" className="" />
          </Link>

          {/* Hamburger Icon */}
          <button
            className="block md:hidden text-primary"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6h16.5M3.75 12h16.5M3.75 18h16.5"
              />
            </svg>
          </button>

          {/* Main Navigation */}
            <div
              className={`fixed md:relative md:flex items-center justify-between bg-white md:bg-transparent w-full md:w-auto top-[8vh] md:top-4 left-0 md:left-auto px-8 md:px-0 transition-all duration-300 ${
              isMenuOpen ? "block" : "hidden md:block"
              }`}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center w-full md:w-auto space-y-4 md:space-y-0 md:space-x-5 text-primary">
                <Link to="/Contact" className="p-2 px-5">
                Contact
                </Link>
                <Link to="/About" className="p-2 px-5">
                About
                </Link>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center w-full md:w-auto mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-4">
                <Link
                to="/Login"
                className="p-2 text-primary text-sm px-6 rounded-t-xl rounded-br-xl border border-primary"
                >
                Login
                </Link>
                <Link
                to="/Signup"
                className="p-2 text-primary text-sm px-6 rounded-t-xl rounded-br-xl border border-primary"
                >
                Sign Up
                </Link>
                <Button text="Download App" className="w-fit border border-primary text-primary" />
              </div>
            </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

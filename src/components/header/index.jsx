import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const data = JSON.parse(localStorage.getItem("user"));

  return (
    <header className="shadow-sm border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between px-6 md:px-10 h-[70px] max-w-[1280px] mx-auto">
        <div className="text-2xl font-bold text-gray-900 tracking-tight hover:text-black transition-colors">
          <Link to={"/"}>LOGO</Link>
        </div>
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link
            to={"/"}
            className="hover:text-black transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="hover:text-black transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="hover:text-black transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>
        <div>
          {data ? (
            <Link
              to={"/user"}
              className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200"
            >
              {data.name}
            </Link>
          ) : (
            <Link
              to={"/login"}
              className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

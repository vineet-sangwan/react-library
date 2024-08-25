import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-teal-400 p-4 shadow-lg w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">BookStore</h1>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <FiMenu className="w-6 h-6" />
        </button>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-white hover:text-gray-100 transition duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/books/all"
            className="text-white hover:text-gray-100 transition duration-300 ease-in-out"
          >
            Browse Books
          </Link>
          <Link
            to="/addbook"
            className="text-white hover:text-gray-100 transition duration-300 ease-in-out"
          >
            Add Book
          </Link>
        </div>
      </div>

      {/* Links for Mobile */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          <Link
            to="/"
            className="text-white hover:text-gray-100 transition duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/books/all"
            className="text-white hover:text-gray-100 transition duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            Browse Books
          </Link>
          <Link
            to="/addbook"
            className="text-white hover:text-gray-100 transition duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            Add Book
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

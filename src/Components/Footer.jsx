import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-5">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between mb-8">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Bookstore</h3>
            <p className="text-gray-400">
              Explore a world of books at your fingertips. Discover, browse, and
              enjoy a wide selection of books across various genres.
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2">
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="mb-2 hover:underline">Browse Books</li>
              <li className="mb-2 hover:underline">Categories</li>
              <li className="hover:underline">About Us</li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">123 Book Street, Bibliopolis</p>
            <p className="mb-2">Email: info@bookstore.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FaGithub size={24} />
          </a>
        </div>

        <div className="text-center mt-8 text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Bookstore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

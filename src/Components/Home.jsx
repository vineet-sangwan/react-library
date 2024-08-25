import React from "react";
import { Link } from "react-router-dom";
import { PopularBooks } from "../Utils/PopularBook";

const Home = () => {
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Mystery", "Fantasy"];
  const Books = PopularBooks;

  return (
    <div>
      <div className="container mx-auto mt-12 px-4">
        <h2 className="text-5xl font-extrabold mb-8 text-gray-800 text-center">
          Welcome to <span className="text-blue-600">BookStore</span>!
        </h2>

        {/* Book Categories */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold mb-6 text-gray-700 text-center">
            Explore Our Categories
          </h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <li
                key={category}
                className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-center"
              >
                <Link to={`/books/${category}`} className="block">
                  <span className="text-lg font-bold">{category}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Popular Books */}
        <div>
          <h3 className="text-3xl font-semibold mb-6 text-gray-700 text-center">
            Popular Books
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PopularBooks.slice(20, 25).map((book) => (
              <li
                key={book.id}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-48 h-64 object-cover rounded-lg"
                  />
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                  {book.title}
                </h4>
                <p className="text-gray-600 mb-4 text-center">
                  by {book.author}
                </p>
                <Link
                  to={`/book/${book.id}`}
                  className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out block text-center"
                >
                  View Details
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;

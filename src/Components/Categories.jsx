import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const booksData = ["Fiction", "Non-Fiction", "Sci-Fi", "Mystery", "Fantasy"];
const Categories = () => {
  const { category } = useParams();
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const filtered = booksData.filter(
      (book) => book.category.toLowerCase() === category.toLowerCase()
    );
    setFilteredBooks(filtered);
  }, [category]);

  return (
    <div className="container mx-auto mt-12 px-4">
      <h2 className="text-4xl font-extrabold mb-8 text-gray-800 text-center">
        {category} Books
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBooks.map((book) => (
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
            <p className="text-gray-600 mb-4 text-center">by {book.author}</p>
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
  );
};

export default Categories;

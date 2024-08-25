import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux"; // Import useSelector
import { PopularBooks } from "../Utils/PopularBook";

const BrowseBooks = () => {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  const books = useSelector((state) => state.books); // Get books from Redux state

  useEffect(() => {
    // Combine the PopularBooks array with the books from Redux
    const allBooks = [...PopularBooks, ...books];

    // Filter books based on the selected category and search term
    const filtered = allBooks.filter(
      (book) =>
        (category === "all" || book.category === category) &&
        (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredBooks(filtered);
  }, [category, searchTerm, books]); // Add books to the dependency array

  return (
    <div className="container mx-auto mt-12 px-4">
      <h2 className="text-4xl font-extrabold mb-8 text-gray-800 text-center">
        Browse Books
      </h2>

      {/* Search Bar */}
      <div className="mb-8 lg:w-1/3 mx-auto">
        <input
          type="text"
          placeholder="Search by title or author..."
          className="w-full p-3 border rounded-lg shadow-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Books List */}
      <div>
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
    </div>
  );
};

export default BrowseBooks;

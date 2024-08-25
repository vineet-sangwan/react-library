import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { PopularBooks } from "../Utils/PopularBook";

const BookDetails = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books); // Fetch books from Redux state

  // Combine PopularBooks with the books from Redux
  const allBooks = [...PopularBooks, ...books];

  // Find the book by id from the combined list
  const book = allBooks.find((b) => b.id === parseInt(id));

  if (!book)
    return (
      <div className="text-center text-xl text-red-600">Book not found</div>
    );

  return (
    <div className="container mx-auto mt-12 px-4">
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-8 mb-12">
        <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
          <img
            src={book.image}
            alt={book.title}
            className="w-64 h-96 object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="md:ml-8 w-full md:w-2/3">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-800">
            {book.title}
          </h2>
          <p className="text-lg text-gray-700 mb-4">by {book.author}</p>
          <p className="text-gray-600 mb-6">{book.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-xl mr-2">⭐</span>
            <span className="text-gray-800 text-lg">{book.rating}</span>
          </div>
          <div className="text-center">
            <a
              href="/"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

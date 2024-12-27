import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Book = {
  id: number;
  name: string;
  type: string;
  available: boolean;
};

export default async function serverSideProps() {
  const res = await fetch("https://simple-books-api.glitch.me/books/");
  const books: Book[] = await res.json();
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <h1 className="text-blue-600 text-5xl text-center p-10 font-bold">
        Server-Side Data Fetching
      </h1>
      <div className="flex-grow container mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white p-6 shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <h3 className="font-semibold text-xl mb-3 text-gray-800">
              {book.name}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              <strong>Type:</strong> {book.type}
            </p>

            <div className="flex items-center justify-between">
              <p
                className={`text-sm font-medium px-2 py-1 rounded-full ${
                  book.available
                    ? "bg-green-200 text-green-600"
                    : "bg-red-200 text-red-600"
                }`}
              >
                {book.available ? "Available" : "Unavailable"}
              </p>

              <button className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors duration-300">
                More Info
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

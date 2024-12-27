import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow flex items-center justify-center text-center px-4">
        <div className="max-w-3xl w-full">
          <h2 className="text-5xl font-bold text-gray-800">
            Welcome to the Data Fetching Assignment
          </h2>
          <p className="mt-4 text-xl text-gray-700 font-semibold">
            Explore data fetching using client-side and server-side techniques.
          </p>

          <div className="mt-8">
            <Link href="/client-side">
              <button className="m-4 px-6 py-3 bg-blue-500 text-white text-lg font-bold rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300">
                Client-Side Data Rendering
              </button>
            </Link>

            <Link href="/server-side">
              <button className="m-4 px-6 py-3 bg-green-500 text-white text-lg font-bold rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300">
                Server-Side Data Fetching
              </button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">
          <Link href="/">Data Fetching</Link>
        </h1>
        <ul className="flex space-x-5 text-white font-semibold">
          <li>
            <Link href="/client-side">Client Side</Link>
          </li>
          <li>
            <Link href="/server-side">Server Side</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

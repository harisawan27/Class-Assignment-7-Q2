import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
        <p className="text-sm text-center sm:text-left">
          &copy; {new Date().getFullYear()} Data Fetching Assignment. All rights
          reserved.
        </p>

        <div className="mt-4 sm:mt-0 flex space-x-6">
          <a
            href="https://instagram.com/mharisawan27/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://linkedin.com/in/m-haris-awan/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/harisawan27/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

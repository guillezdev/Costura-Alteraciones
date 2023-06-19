import React from "react";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-gray-400">
            Copyright © 2023 Creado por{" "}
            <a
              href="https://www.linkedin.com/in/guillezdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              Guillezdev.
            </a>
          </p>
          <div className="flex items-center"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

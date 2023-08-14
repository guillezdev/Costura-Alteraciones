import React from "react";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-8">

      <p className="text-gray-400 text-center">
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

    </footer>
  );
}

export default Footer;

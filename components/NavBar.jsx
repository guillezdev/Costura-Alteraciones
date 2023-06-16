"use client";

import React, { useState, useRef } from "react";
import { Transition } from "@headlessui/react";
import LogoYadel from "../public/LogoYadel.webp";
import { Link } from "react-scroll";
import Image from "next/image";
import { FaHome, FaMapPin, FaSignLanguage } from "react-icons/fa";
import { BsPersonVcard } from "react-icons/bs";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const checkboxRef = useRef(null);

  return (
    <>
      <div className="h-12"></div>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 shadow-lg shadow-black rounded-b-lg bg-black text-white`}
      >
        <div className="container mx-auto py-2 px-6 md:px-8">
          <div className="flex justify-between items-center">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              cursor="pointer"
              className="flex items-center p-0 m-0 self-center cursor-pointer select-none"
            >
              <Image src={LogoYadel} className="h-12 w-12 m-0 p-0" alt="Logo" />
            </Link>
            <div className="hidden md:block">
              <ul className="flex items-center space-x-4">
                <li>
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    cursor="pointer"
                    className="flex justify-center items-center gap-1 text-gray-50 font-semibold hover:text-stone-500 cursor-pointer select-none"
                  >
                    <FaHome />
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    cursor="pointer"
                    className="flex justify-center items-center gap-1 text-gray-50 font-semibold hover:text-stone-500 cursor-pointer select-none"
                  >
                    <FaSignLanguage />
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    cursor="pointer"
                    className="flex justify-center items-center gap-1 text-gray-50 font-semibold hover:text-stone-500 cursor-pointer select-none"
                  >
                    <BsPersonVcard />
                    Sobre mi
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    cursor="pointer"
                    className="flex justify-center items-center gap-1 px-2 py-1 rounded-md border-dashed border-2 border-gray-50 hover:border-stone-500 hover:text-stone-500"
                  >
                    <FaMapPin /> Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:hidden">
              <label className="bar scale-50">
                <input
                  type="checkbox"
                  ref={checkboxRef}
                  onClick={() => setIsOpen(!isOpen)}
                  id="check"
                />
                <span className="top"></span>
                <span className="middle"></span>
                <span className="bottom"></span>
              </label>
            </div>
          </div>
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {
              <div className="md:hidden mt-10">
                <ul className="flex items-center flex-col space-y-2">
                  <li>
                    <Link
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      cursor="pointer"
                      className="flex justify-center items-center gap-1 text-gray-50 font-semibold hover:text-stone-500 cursor-pointer select-none"
                    >
                      <FaHome />
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="services"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      cursor="pointer"
                      className="flex justify-center items-center gap-1 text-gray-50 font-semibold hover:text-stone-500 cursor-pointer select-none"
                    >
                      <FaSignLanguage />
                      Servicios
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      cursor="pointer"
                      className="flex justify-center items-center gap-1 text-gray-50 font-semibold hover:text-stone-500 cursor-pointer select-none"
                    >
                      <BsPersonVcard />
                      Sobre mi
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      cursor="pointer"
                      className="flex justify-center items-center gap-1 px-2 py-1 rounded-md border-dashed border-2 border-gray-50 hover:border-stone-500 hover:text-stone-500"
                    >
                      <FaMapPin /> Contacto
                    </Link>
                  </li>
                </ul>
              </div>
            }
          </Transition>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

"use client";

import React, { useState, useEffect, useRef } from "react";
import { Transition } from "@headlessui/react";
import LogoYadel from "../public/LogoYadel.webp";
import Link from "next/link";
import Image from "next/image";

export const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const checkboxRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className='h-12'></div>
      <nav
        className={` fixed top-0 left-0 right-0 z-50  bg-gradient-to-tr from-stone-600 to-stone-900 text-white`}
      >
        <div className='container mx-auto py-2 px-6 md:px-8'>
          <div className='flex justify-between items-center'>
            <Link
              href={"/"}
              className='flex items-center p-0 m-0 self-center cursor-pointer select-none'
            >
              <Image
                src={LogoYadel}
                className='h-12 w-12 m-0 p-0'
                alt='Logo'
              />
            </Link>
            <div className='hidden md:block'>
              <ul className='flex items-center space-x-4'>
                <li>
                  <Link
                    href={"/"}
                    className='text-gray-50 font-semibold hover:text-stone-500 cursor-pointer select-none'
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/catalogo"}
                    className='text-gray-50 font-semibold hover:text-stone-500 cursor-pointer select-none'
                  >
                    Galeria
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/contact"}
                    className='bg-stone-500 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-colors duration-300'
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div className='md:hidden'>
              <label className='hamburger'>
                <input
                  ref={checkboxRef}
                  type='checkbox'
                  onClick={() => setIsOpen(!isOpen)}
                />
                <svg viewBox='0 0 32 32'>
                  <path
                    className='line line-top-bottom'
                    d='M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22'
                  ></path>
                  <path className='line' d='M7 16 27 16'></path>
                </svg>
              </label>
            </div>
          </div>
          <Transition
            show={isOpen}
            enter='transition ease-out duration-100 transform'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='transition ease-in duration-75 transform'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            {
              <div className='md:hidden mt-4'>
                <ul className='flex flex-col space-y-2'>
                  <li>
                    <Link
                      href={"/"}
                      onClick={() => {
                        setIsOpen(!isOpen);
                        checkboxRef.current.checked = false;
                      }}
                      className='text-gray-50 font-semibold hover:text-stone-500 cursor-pointer select-none'
                    >
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/catalogo"}
                      onClick={() => {
                        setIsOpen(!isOpen);
                        checkboxRef.current.checked = false;
                      }}
                      className='text-gray-50 font-semibold hover:text-stone-500 cursor-pointer select-none'
                    >
                      Galeria
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/contact"}
                      onClick={() => {
                        setIsOpen(!isOpen);
                        checkboxRef.current.checked = false;
                      }}
                      className='text-gray-50 font-semibold hover:text-stone-500 cursor-pointer select-none'
                    >
                      Contacto
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

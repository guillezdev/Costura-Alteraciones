import Image from "next/image";
import React from "react";
import bgimage from "../public/bgimage.jpg";

export function Homepage() {
  return (
    <>
      <header className="text-white  bg-gradientedown" >
        <div className="container text-center mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div>
              <h1 className="text-8xl bg-clip-text text-transparent bg-gradient-to-r text-shadow-md shadow-teal-500 from-green-200 to-green-400 font-bold mb-4">
                L&R Aleteration
              </h1>
              <p className="text-xl mb-8">
                Aquí encontrarás información sobre los servicios de costura que
                ofrezco, así como algunas fotos de mis trabajos anteriores.
              </p>
              <a
                href="#"
                className="bg-black text-gray-50 py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 inline-block"
              >
                Ver más
              </a>
            </div>
          </div>
      </header>
    </>
  );
}
export default Homepage;

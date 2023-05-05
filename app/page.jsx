import Image from "next/image";
import React from "react";
import bgimage from "../public/bgimage.jpg";

export function Homepage() {
  return (
    <>
      <div className='bg-gradient-to-br from-stone-600 to-stone-900 text-white'>
        <div className='container mx-auto py-12 px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div>
              <h1 className='text-4xl font-bold mb-4'>
                ¡Bienvenido a mi sitio web de costura!
              </h1>
              <p className='text-xl mb-8'>
                Aquí encontrarás información sobre los servicios de costura que
                ofrezco, así como algunas fotos de mis trabajos anteriores.
              </p>
              <a
                href='#'
                className='bg-black text-gray-50 py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 inline-block'
              >
                Ver más
              </a>
            </div>
            <div>
              <Image
                className='w-full h-full rounded-lg border-none'
                src={bgimage}
                alt='Costura'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Homepage;

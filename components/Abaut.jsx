import React from "react";
import Image from "next/image";
import { BsCheckCircle, BsSpeedometer } from "react-icons/bs";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center md:justify-center md:px-20 py-16 md:py-24 bg-stone-900"
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-1 items-center justify-center ">
        <div className="max-w-xl flex flex-col px-2">
          <h2 className="text-4xl  text-stone-50 font-bold mb-4">Sobre mí</h2>
          <p className="text-stone-300 leading-relaxed">


            Como costurera profesional con mas de <span className="bg-stone-700 rounded-md p-1">+20</span> años de experiencia te garantizo el mejor servicio al renovar tus prendas a medida buscando siempre la perfección de un arreglo invisible.
          </p>
          <h3 className="text-stone-50 bg-stone-700 inline-block p-1 rounded-md rounded-br-none  mt-4">
            ¿Que ofrece L&R Alteration?
          </h3>
          <div className="flex justify-start items-center gap-3 text-stone-300 p-1">
            <BsCheckCircle />
            <p>Calidad</p>

            <BsSpeedometer />
            <p>Velocidad</p>
            <span className="bg-stone-700 rounded-md px-1">&</span>
            <p className="text-green-300">¡Los mejores precios!.</p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full px-2">
          <Image
            width={500}
            height={500}
            src="/Loraine.jpg"
            alt="Sobre mí"
            className="rounded-lg shadow-xl shadow-black"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

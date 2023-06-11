import React from "react";
import { FaRulerCombined } from "react-icons/fa";
import { GiSewingNeedle } from "react-icons/gi";
import { RiScissorsCutFill } from "react-icons/ri";
function Services() {
  return (
    <section className="bg-black text-white">

      <div className="w-full flex justify-center flex-col items-center p-5">
        <h1 className="text-center text-4xl pt-4">Servicios</h1>
        <div className=" text-center h-1 w-32 bg-stone-600 rounded-lg"></div>
      </div>

      <div className="flex gap-2 justify-center items-center bg-stone-800 py-12 flex-wrap">
        <div className="flex flex-col max-w-xs border-solid border-2 rounded-lg p-2">
          <div className="flex flex-col gap-2">
            <FaRulerCombined size={200} />
            <h1>Arreglos de ropa</h1>
          </div>

          <div className="h-1 w-4 bg-stone-600 rounded-lg"></div>
          <p>
            Un parche, coser un botón, coser algo que se te acaba de romper,
            subir bajos..
          </p>
        </div>
        <div className="flex flex-col max-w-xs border-solid border-2 rounded-lg p-2 gap-5">
          <div className="flex flex-col gap-2">
            <GiSewingNeedle size={200} />
            <div>
              <h1>Bordados</h1>
              <div className="h-1 w-4 bg-stone-600 rounded-lg"></div>
            </div>
          </div>

          <p>
            Hacemos todo tipo de bordados, desde 1 unidad hasta bordados en
            cantidades
          </p>
        </div>
        <div className="flex flex-col max-w-xs border-solid border-2 rounded-lg p-2">
          <div className="flex flex-col gap-2">
            <RiScissorsCutFill size={200} />
            <h1>Útiles costura</h1>
          </div>

          <div className="h-1 w-4 bg-stone-600 rounded-lg"></div>
          <p>
            Distribuidores de un extenso surtido de fornituras y accesorios para
            la mercería
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;

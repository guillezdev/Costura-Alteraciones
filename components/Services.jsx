import React from "react";
import { FaRulerCombined } from "react-icons/fa";
import { GiSewingNeedle } from "react-icons/gi";
import { RiScissorsCutFill } from "react-icons/ri";
function Services() {
  return (
    <section className="bg-black text-white">
      <div className="w-full flex justify-center flex-col items-center p-5">
        <h1 className="text-center text-4xl pt-4">Servicios</h1>
        <div className="text-center h-1 w-32 border-dashed border-2 border-stone-500 rounded-lg "></div>
      </div>
      <div className="flex gap-4 justify-center items-center bg-stone-800 py-12 flex-wrap">
        <div className="flex flex-col max-w-xs border-solid border-2 rounded-lg p-2">
          <div className="flex flex-col gap-2">
            <FaRulerCombined size={200} />
            <h1>Ajuste de Talla</h1>
          </div>

          <div className="h-1 w-12 bg-stone-600 rounded-lg"></div>
          <p>
            Si tienes una prenda que te encanta pero no te queda bien, ¡no te
            preocupes! Ofrecemos servicios de ajuste de talla para que esa
            prenda se ajuste perfectamente a tu cuerpo.
          </p>
        </div>
        <div className="flex flex-col max-w-xs border-solid border-2 rounded-lg p-2 py-6">
          <div className="flex flex-col gap-2">
            <GiSewingNeedle size={200} />
            <h1>Reparación de Roturas</h1>
          </div>
          <div className="h-1 w-12 bg-stone-600 rounded-lg"></div>
          <p>
            ¿Tienes una prenda favorita que tiene un agujero o una
            rasgadura?¡podemos ayudarte!. Ofrecemos servicios de reparación de
            roturas para que puedas seguir usando tus prendas favoritas.
          </p>
        </div>
        <div className="flex flex-col max-w-xs border-solid border-2 rounded-lg p-2">
          <div className="flex flex-col gap-2">
            <RiScissorsCutFill size={200} />
            <h1>Alteración de Longitud</h1>
          </div>

          <div className="h-1 w-12 bg-stone-600 rounded-lg"></div>
          <p>
            ¿Tienes una prenda que es demasiado larga o demasiado corta para ti?
            Ofrecemos servicios de alteración de longitud para que esa prenda se
            ajuste perfectamente a tu altura.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;

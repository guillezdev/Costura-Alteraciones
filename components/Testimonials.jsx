"use client";

import { Carousel } from "flowbite-react";
import TestimonialCard from "./TestimonialCard ";

export default function SlideAsAnything() {
  return (
    <section className="h-screen bg-black py-14">
      <h1 className="text-center font-bold pt-4 text-white text-4xl">
        ¿Que piensan nuestros clientes?
      </h1>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-1 my-8 bg-stone-700 border-0 rounded dark:bg-gray-700" />
        <div className="absolute px-4 -translate-x-1/2 bg-black left-1/2 dark:bg-gray-900">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-stone-700"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      <Carousel leftControl=" " rightControl=" ">
        <div className="flex h-full items-center justify-center bg-black mb-4">
          <TestimonialCard
            name="Luisa"
            description="Acudí a Loraine para que me ayudara a arreglar un vestido que tenía desde hace tiempo y que me encantaba, pero que ya no me quedaba bien. La atención que recibí fue excelente, y ella se tomó el tiempo para entender exactamente lo que quería y lograr el ajuste perfecto. Sin duda, recomendaría sus servicios de costura a cualquiera que necesite ayuda para renovar su ropa."
          />
        </div>
        <div className="flex  h-full items-center justify-center bg-black">
          <TestimonialCard
            name="Jorge"
            description="Loraine es una costurera muy talentosa y dedicada. La conocí cuando necesitaba ayuda para arreglar mi traje de gala para una boda. Desde el primer momento, me hizo sentir cómodo y confiado en su habilidad. El resultado final fue impresionante, y recibí muchos cumplidos sobre lo bien que me veía. Siempre acudiré a ella para cualquier necesidad de costura que tenga en el futuro."
          />
        </div>
        <div className="flex  h-full items-center justify-center bg-black">
          <TestimonialCard
            name="Cecilia"
            description="No puedo expresar lo feliz que estoy con el trabajo que hizo Loraine en mi vestido de graduación. Fue un proceso emocionante, pero también estresante, ya que quería que todo fuera perfecto. Loraine no solo ajustó el vestido a mi cuerpo de manera increíble, sino que también me brindó tranquilidad y confianza durante todo el proceso. Definitivamente volveré a acudir a sus servicios de costura en el futuro."
          />
        </div>
      </Carousel>
    </section>
  );
}

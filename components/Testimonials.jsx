"use client";

import { Carousel } from "flowbite-react";
import TestimonialCard from "./TestimonialCard ";

export default function SlideAsAnything() {
  return (
    <section className="h-screen bg-black">
      <div className="w-full flex justify-center flex-col items-center p-5">
        <h1 className="text-center text-white text-4xl pt-4">
          Que piensan nestros clientes?
        </h1>
      </div>
      <Carousel>
        <div className="flex h-full items-center justify-center bg-black">
          <TestimonialCard
            name="Luisa"
            description="Acudí a Loraine para que me ayudara a arreglar un vestido que tenía desde hace tiempo y que me encantaba, pero que ya no me quedaba bien. La atención que recibí fue excelente, y ella se tomó el tiempo para entender exactamente lo que quería y lograr el ajuste perfecto. Sin duda, recomendaría sus servicios de costura a cualquiera que necesite ayuda para renovar su ropa."
          />
        </div>
        <div className="flex h-full items-center justify-center bg-black">
          <TestimonialCard
            name="Jorge"
            description="Loraine es una costurera muy talentosa y dedicada. La conocí cuando necesitaba ayuda para arreglar mi traje de gala para una boda. Desde el primer momento, me hizo sentir cómodo y confiado en su habilidad. El resultado final fue impresionante, y recibí muchos cumplidos sobre lo bien que me veía. Siempre acudiré a ella para cualquier necesidad de costura que tenga en el futuro."
          />
        </div>
        <div className="flex h-full items-center justify-center bg-black">
          <TestimonialCard
            name="Cecilia"
            description="No puedo expresar lo feliz que estoy con el trabajo que hizo Loraine en mi vestido de graduación. Fue un proceso emocionante, pero también estresante, ya que quería que todo fuera perfecto. Loraine no solo ajustó el vestido a mi cuerpo de manera increíble, sino que también me brindó tranquilidad y confianza durante todo el proceso. Definitivamente volveré a acudir a sus servicios de costura en el futuro."
          />
        </div>
      </Carousel>
    </section>
  );
}

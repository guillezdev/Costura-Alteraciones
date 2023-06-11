"use client";

import { Carousel } from "flowbite-react";
import TestimonialCard from "./TestimonialCard ";

export default function SlideAsAnything() {
  return (
    <section className="h-screen bg-black">
      <Carousel>
        <div className="flex items-center justify-center gap-2 bg-white text-black">
          <TestimonialCard />
        </div>
        <div className="flex h-full items-center justify-center bg-black">
          <TestimonialCard />
        </div>
        <div className="flex h-full items-center justify-center bg-black">
        <TestimonialCard />
        </div>
      </Carousel>
    </section>
  );
}

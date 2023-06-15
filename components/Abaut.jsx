import React from 'react';


const About = () => {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center md:justify-center md:px-20 py-16 md:py-24 bg-stone-900">
      <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 px-2">
        <h2 className="text-4xl  text-stone-50 font-bold mb-4">Sobre mí</h2>
        <p className="text-stone-300 leading-relaxed">
          Soy una costurera con más de <span className='bg-stone-700 rounded-md p-1'>+20</span> años de experiencia en el sector. Me
          especializo en confeccionar prendas a medida y arreglos de todo tipo.
          Siempre estoy buscando aprender nuevas técnicas y tendencias para
          ofrecer el mejor servicio a mis clientes.
        </p>
        <h3 className='text-stone-50 bg-stone-700 inline-block p-1 rounded-md'>¿Que ofresco?</h3>
        <div className='flex gap-3 text-stone-300'><p>a</p> <p>b</p> <p>c</p></div>
      </div>
      <div className="md:w-1/2">
        <img src="https://www.ohchr.org/sites/default/files/styles/hero_5_image_desktop/public/2022-11/women-rights-main-image.jpg?itok=RRGl2PFb" alt="Sobre mí" className="rounded-lg shadow-xl shadow-black px-2" />
      </div>
      
    </section>
  );
};

export default About;
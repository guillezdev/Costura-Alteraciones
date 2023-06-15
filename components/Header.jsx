export function Header() {
  return (
    <>
      <header id="home" className="h-screen flex justify-center items-center text-white  bg-gradientedown">
        <div className="container text-center mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <h1 className=" text-6xl lg:text-8xl font-normal font-serif">L&R</h1>
              <h2 className="text-4xl lg:text-6xl mb-4 tracking-[15px]">
                Aleteration
              </h2>
            </div>
            <p className="text-xl lg:text-2xl mb-8 text-gray-300 max-w-xl">
              Ofrecemos servicios de{" "}
              <samp className="text-gray-50 font-semibold">alta calidad</samp>{" "}
              en <samp className="text-gray-50 font-semibold">arreglos</samp> y{" "}
              <samp className="text-gray-50 font-semibold">alteraciones</samp>{" "}
              de ropa para asegurar que tus prendas se ajusten perfectamente a
              ti.
            </p>
            <a
              href="#"
              className="bg-black text-gray-50 py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 inline-block"
            >
              Contactar
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

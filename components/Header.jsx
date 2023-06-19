import { FaPhoneAlt } from "react-icons/fa";

export function Header() {
  return (
    <>
      <header
        id="home"
        className="min-h-screen flex justify-center z-10 items-center text-white relative bg-img"
      >
        <div className="absolute h-screen w-full gradientdown z-[-8]"></div>
        <div className="container text-center mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <h1 className="changeFont text-6xl lg:text-8xl font-normal">
                L&R
              </h1>
              <h2 className="text-4xl lg:text-6xl mb-4 tracking-[15px]">
                Alteration
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
               href="tel:+1(786)813-9937"
              className="[&>a]: flex items-center text-lg gap-2 bg-stone-950 hover:scale-105 text-white font-normal py-2 px-4 rounded-md "
            >
              <FaPhoneAlt size={24} className="" />
              Llámame
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

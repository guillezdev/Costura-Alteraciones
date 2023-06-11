export function Header() {
  return (
    <>
      <header className="text-white  bg-gradientedown">
        <div className="container text-center mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-6xl font-bold mb-4">L&R Aleteration</h1>
            <p className="text-xl mb-8 text-gray-300">
              Ofrecemos servicios de <samp className="text-gray-50 font-semibold">alta calidad</samp> en <samp className="text-gray-50 font-semibold">arreglos</samp> y <samp className="text-gray-50 font-semibold">alteraciones</samp> de
              ropa para asegurar que tus prendas se ajusten perfectamente a ti.
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

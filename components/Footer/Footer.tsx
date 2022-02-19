const Footer = () => {
  return (
    <footer className="flex justify-center my-32">
      <div className="w-3/4 flex flex-col sm:flex-row text-center justify-between">
        <div className="flex flex-col">
          <span className="font-bold">Nosotros</span>
          <span>Conoce más</span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold">Servicios</span>
          <span>Todos los productos</span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold">Hecho para</span>
          <span>Platzi y su curso de Next.JS de platzi.</span>
          <div>
            <span className="mx-5">Twitter</span>
            <span>Github</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

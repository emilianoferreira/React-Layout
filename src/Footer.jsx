import "./styles/Footer.css"


const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Sobre Nosotros</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-md-4">
            <h5>Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/about" className="">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="/services" className="">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/contact" className="">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Redes Sociales</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://facebook.com"
                  className=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  className=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  className=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-3">
          <p>&copy; 2024 Mi Compañía. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

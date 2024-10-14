import "./styles/Jumbotron.css"


function Jumbotron() {
  return (
    <div className="jumbotron">
      <h1>Desarrollo web con React</h1>
      <p>
      React es una biblioteca de JavaScript que facilita el desarrollo de interfaces interactivas mediante componentes reutilizables, mejorando el rendimiento con su virtual DOM y ofreciendo una gran flexibilidad y escalabilidad, respaldada por una activa comunidad y un amplio ecosistema de herramientas.
      </p>
      <button className="btn btn-outline-primary w-100"><a href="https://react.dev/">Página oficial</a></button>
    </div>
  );
}

export default Jumbotron;

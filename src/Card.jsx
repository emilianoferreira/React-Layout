import React from "react";
import "./styles/Cards.css";

const cardInfo = [
  {
    title: "Creatividad",
    description:
      "Capacidad de encontrar soluciones innovadoras y diseñar experiencias únicas en la web.",
    img: {
      src: "/images/img1.jpg",
      id: 1,
      alt: "imagen 1",
    },
  },
  {
    title: "Libertad",
    description:
      "Oportunidad de elegir tecnologías y enfoques sin limitaciones, permitiendo personalización.",
    img: {
      src: "/images/img2.jpg",
      id: 2,
      alt: "imagen 2",
    },
  },
  {
    title: "Exploracion",
    description:
      "Disposición a probar nuevas herramientas y técnicas para mejorar constantemente.",
    img: {
      src: "/images/img3.jpg",
      id: 3,
      alt: "imagen 3",
    },
  },
  {
    title: "Conocimiento",
    description:
      "Dominio de tecnologías y buenas prácticas que garantizan soluciones funcionales y eficientes.",
    img: {
      src: "/images/img4.jpg",
      id: 4,
      alt: "imagen 4",
    },
  },
];

//<CardImage/> es el componente individual de cada imagen.

function CardImage({ src, id, alt }) {
  return <img src={src} id={id} className="card-img-top" alt={alt} />;
}

//<Card> componente de la tarjeta individual
export const Card = ({ img, title, description }) => {
  return (
    <>
      <div className="card mt-3 g-3" style={{ width: "18rem" }}>
        <CardImage key={img.id} src={img.src} alt={img.alt} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </>
  );
};

//<CardList> Componente que enlista todas las tarjetas del array
// const CardList = () => {
//   return (
//     <div className="d-flex justify-content-evenly ">
//       {cardInfo.map((card) => (
//         <Card
//           key={card.img.id}
//           img={card.img}
//           title={card.title}
//           description={card.description}
//         />
//       ))}
//     </div>
//   );
// };


const CardList = () => {
  return (
    <div className="row g-3">
      {cardInfo.map((card) => (
        <div key={card.img.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
          <Card img={card.img} title={card.title} description={card.description} />
        </div>
      ))}
    </div>
  );
};


export default CardList;

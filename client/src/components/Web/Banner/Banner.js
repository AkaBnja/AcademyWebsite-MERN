import React from "react";
import { Container } from "semantic-ui-react";
import "./Banner.scss";

export function Banner() {
  return (
    <div className="banner">
      <Container>
        <h1>
          Aprende nuevas <br /> tecnologias web y moviles
        </h1>
        <h2>
          A traves de cursos practicos, consisos y actualizados, creados por
          <br /> profesionales con años de experiencia.
        </h2>
      </Container>
      <div className="banner__dark" />
      {/*Esto es un div el cual se pinta de negro, esto para hacer el efecto de oscuro en el banner. */}
    </div>
  );
}

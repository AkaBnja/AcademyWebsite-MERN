import React from "react";
import { Grid, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Menu.scss";

export function Menu() {
  return (
    <div className="footer-menu">
      <h4>Navegacion</h4>

      <Grid columns={2}>
        <Grid.Column>
          <Link to="#">
            {/*Dentro de la propiedad "to" se coloca el link donde uno quiere ir (ej: /blog) */}
            <Icon name="book" /> Cursos Online
          </Link>
          <Link to="#">
            {/*Dentro de la propiedad "to" se coloca el link donde uno quiere ir (ej: /blog) */}
            <Icon name="code" /> Desarrolo web
          </Link>
          <Link to="#">
            {/*Dentro de la propiedad "to" se coloca el link donde uno quiere ir (ej: /blog) */}
            <Icon name="database" /> Base de datos
          </Link>
          <Link to="#">
            {/*Dentro de la propiedad "to" se coloca el link donde uno quiere ir (ej: /blog) */}
            <Icon name="code" /> UI/UX
          </Link>
        </Grid.Column>

        <Grid.Column>
          <Link to="#">
            {/*Dentro de la propiedad "to" se coloca el link donde uno quiere ir (ej: /blog) */}
            <Icon name="server" /> Sistemas / Servidores
          </Link>
          <Link to="#">
            {/*Dentro de la propiedad "to" se coloca el link donde uno quiere ir (ej: /blog) */}
            <Icon name="cogs" /> CMS
          </Link>
          <Link to="#">
            {/*Dentro de la propiedad "to" se coloca el link donde uno quiere ir (ej: /blog) */}
            <Icon name="user outline" /> Portafolio
          </Link>
          <Link to="#">
            {/*Dentro de la propiedad "to" se coloca el link donde uno quiere ir (ej: /blog) */}
            <Icon name="python" /> Backend
          </Link>
        </Grid.Column>
      </Grid>
    </div>
  );
}

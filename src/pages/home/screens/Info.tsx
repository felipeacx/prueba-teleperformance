import React, { useEffect } from "react";

export const Info = () => {
  return (
    <div style={{ margin: 20 }}>
      <h3 className="primaryColorC">
        Esta es una web desarrollada desde ceros para la vacante Prueba Técnica
        - Desarrollador Front End Sr Teleperformance
      </h3>
      <h5 className="secondaryColorC">Competencias</h5>
      <ul className="list-group">
        <li className="list-group-item secondaryColorC">React</li>
        <li className="list-group-item secondaryColorC">Typescript</li>
        <li className="list-group-item secondaryColorC">JavaScript</li>
        <li className="list-group-item secondaryColorC">CSS3/SCSS</li>
        <li className="list-group-item secondaryColorC">Consumo ApiRest</li>
        <li className="list-group-item secondaryColorC">Boostrap 4</li>
        <li className="list-group-item secondaryColorC">NodeJS (Medio)</li>
        <li className="list-group-item secondaryColorC">
          Gestor de almacenamiento (SQL, Mongo, Postgres) (Básico)
        </li>
      </ul>
      <h5 style={{ marginTop: 10 }}>
        Competencias: React para el frontend con Boostrap, NodeJS para el
        backend con una base de datos Postgres y el consumo a una api externa de
        películas:{" "}
        <a
          target="_blank"
          className="text-dark"
          href="https://www.themoviedb.org/documentation/api"
        >
          TMDB
        </a>
      </h5>
      <h5>
        La aplicación permite consultar las mejores películas actuales, realizar
        inicio de sesión con 2 roles (admin y usuario) y guardar películas como
        favoritas.
      </h5>
    </div>
  );
};

import React from "react";
import "../styles/Header.css";
import { logoutRequest } from "../../../actions/userActions";

export const Header = (props: any) => {
  const goProfile = () => {
    if (localStorage.getItem("rol") === "1") {
      window.location.href = "/profile/admin";
    } else {
      window.location.href = "/profile/user";
    }
  };
  const getRolString = () => {
    var rol = "";
    if (localStorage.getItem("rol") === "1") {
      rol = "Administrador";
    } else {
      rol = "Usuario";
    }
    return rol;
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid primaryColor">
          <a className="navbar-brand" href="/">
            La casa del Cine
          </a>
          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav me-auto mb-2 mb-lg-0"
                style={{ alignItems: "center" }}
              >
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  {localStorage.getItem("authenticated") === "false" ? (
                    <a className="nav-link" href="/register">
                      Registro
                    </a>
                  ) : (
                    <a
                      className="nav-link"
                      style={{ cursor: "pointer" }}
                      onClick={goProfile}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <div>{localStorage.getItem("name")}</div>
                        <div style={{ fontSize: ".75rem" }}>
                          {getRolString()}
                        </div>
                      </div>
                    </a>
                  )}
                </li>
                {localStorage.getItem("authenticated") === "true" &&
                  localStorage.getItem("rol") === "2" && (
                    <li className="nav-item">
                      <a className="nav-link" href="/myfavorites">
                        Mis favoritas
                      </a>
                    </li>
                  )}
                <li className="nav-item">
                  {localStorage.getItem("authenticated") === "false" ? (
                    <a className="nav-link" href="/login">
                      Iniciar sesión
                    </a>
                  ) : (
                    <a className="nav-link" href="/" onClick={logoutRequest}>
                      Cerrar sesión
                    </a>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import { loginRequest } from "../../actions/userActions";
import { Loading } from "../components/Loading";

const Login = (props: any) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setEmailError("");
    setPasswordError("");
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const validateEmail = () => {
    return data.email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  const validatePassword = () => {
    if (data.password.length > 5) {
      return true;
    } else {
      return false;
    }
  };
  const handleLoginRequest = async () => {
    if (!validateEmail()) {
      setEmailError("Ingresa un correo electrónico correcto.");
    }
    if (!validatePassword()) {
      setPasswordError("Ingresa una contraseña de mínimo 6 caracteres.");
    }
    if (
      emailError === "" &&
      passwordError === "" &&
      data.email !== "" &&
      data.password !== ""
    ) {
      await loginRequest(data);
      const success = localStorage.getItem("success");
      if (success === "true") {
        if (localStorage.getItem("rol") === "1") {
          window.location.href = "/profile/admin";
        } else {
          window.location.href = "/profile/user";
        }
      } else {
        setError("Credenciales incorrectas, revísalas e intenta de nuevo.");
      }
    } else {
      setError("Ingresa el correo electrónico y la contraseña para continuar.");
    }
  };
  return (
    <div>
      {localStorage.getItem("loading") === "true" && <Loading />}
      <div
        className="position-absolute"
        style={{
          top: "calc(50% - 175px)",
          left: "calc(50% - 155px)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="mx-auto">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <h1
                  className="primaryColor whiteText"
                  style={{ padding: 5, margin: 5, borderRadius: 5 }}
                >
                  La casa del Cine
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <h1>Inicio de sesión</h1>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="input-group flex-nowrap" style={{ margin: 5 }}>
                  <span className="input-group-text" id="addon-wrapping">
                    @
                  </span>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Correo electrónico"
                    aria-label="email"
                    aria-describedby="addon-wrapping"
                    onChange={handleInputChange}
                    value={data.email}
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {emailError && (
                <div className="alert alert-danger" role="alert">
                  {emailError}
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="input-group flex-nowrap" style={{ margin: 5 }}>
                <span className="input-group-text" id="addon-wrapping">
                  #_$
                </span>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  aria-label="password"
                  aria-describedby="addon-wrapping"
                  onChange={handleInputChange}
                  value={data.password}
                ></input>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {passwordError && (
                <div className="alert alert-danger" role="alert">
                  {passwordError}
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col">
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <p>
                ¿No tienes cuenta? <a href="/register">Regístrate</a>
              </p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col">
              <button
                type="button"
                className="btn btn-primary"
                style={{ margin: 5 }}
                onClick={handleLoginRequest}
              >
                Iniciar sesión
              </button>
            </div>
            <div className="col">
              <a href="/" className="btn btn-danger" style={{ margin: 5 }}>
                Cancelar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

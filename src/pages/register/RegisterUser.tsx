import React, { useState } from "react";
import { registerRequest } from "../../actions/userActions";

const RegisterUser = (props: any) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    rol: "2",
  });
  const [error, setError] = useState("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const handleRegisterRequest = async () => {
    if (data.name !== "" && data.email !== "" && data.password !== "") {
      await registerRequest(data);
      if (
        localStorage.getItem("error") === "Email already registered" &&
        localStorage.getItem("success") === "false"
      ) {
        setError(
          "El correo electrónico ingresado ya fue registrado en el sistema, intenta con uno nuevo o inicia sesión"
        );
      } else {
        if (localStorage.getItem("success") === "true") {
          setError(
            "Te has registrado exitosamente, inicia sesión con el email y la contraseña registradas"
          );
        } else {
          const err = localStorage.getItem("error") ?? "";
          setError(err);
        }
      }
    } else {
      setError("Ingresa todos los datos para continuar");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <p style={{ margin: 10 }}>
              Con tu registro podrás ver las mejores películas de la actualidad
              y guardar tus favoritas, el registro no tarda más de un minuto.
              ¡Animate!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <h1>Registro</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="input-group flex-nowrap" style={{ margin: 5 }}>
              <input
                name="name"
                type="name"
                className="form-control"
                placeholder="Nombre completo"
                aria-label="name"
                aria-describedby="addon-wrapping"
                onChange={handleInputChange}
                value={data.name}
              ></input>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="input-group flex-nowrap" style={{ margin: 5 }}>
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
        <div className="row">
          <div className="col">
            <div className="input-group flex-nowrap" style={{ margin: 5 }}>
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
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
          </div>
        </div>
        <div className="row text-center">
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              style={{ margin: 5 }}
              onClick={handleRegisterRequest}
            >
              Registrarme
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
  );
};

export default RegisterUser;

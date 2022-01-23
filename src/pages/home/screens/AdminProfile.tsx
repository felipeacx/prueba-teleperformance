import React, { useEffect, useState } from "react";
import { getUsers } from "../../../actions/userActions";
import ReactDOM from "react-dom";

export const AdminProfile = () => {
  const getRolString = () => {
    var rol = "";
    if (localStorage.getItem("rol") === "1") {
      rol = "Administrador";
    } else {
      rol = "Usuario";
    }
    return rol;
  };
  const convertToString = (rolSent: number) => {
    var rol = "";
    if (rolSent === 1) {
      rol = "Administrador";
    } else {
      rol = "Usuario";
    }
    return rol;
  };
  const loadUsers = async () => {
    const users = await getUsers(
      localStorage.getItem("id") ?? "",
      localStorage.getItem("token") ?? ""
    );
    let usersDataTable = users.map((e: any) => (
      <tr key={e.id}>
        <th scope="row">{e.id}</th>
        <td>{e.name}</td>
        <td>{e.email}</td>
        <td>{convertToString(e.rol)}</td>
      </tr>
    ));
    ReactDOM.render(usersDataTable, document.getElementById("usersTable"));
  };
  useEffect(() => {
    if (localStorage.getItem("rol") === "1") {
      loadUsers();
    } else if (localStorage.getItem("rol") === "2") {
      window.location.href = "/profile/user";
    } else {
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 style={{ fontWeight: "bold", textAlign: "center" }}>
            Datos básicos
          </h2>
          <h4>
            Nombre del usuario: <b> {localStorage.getItem("name")}</b>
          </h4>
          <h4>
            Correo electrónico: <b> {localStorage.getItem("email")}</b>
          </h4>
          <h4>
            Rol: <b> {getRolString()}</b>
          </h4>
        </div>
        <div className="col">
          <table className="table secondaryColor whiteText">
            <thead className="primaryColor">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Correo electrónico</th>
                <th scope="col">Rol</th>
              </tr>
            </thead>
            <tbody id="usersTable"></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

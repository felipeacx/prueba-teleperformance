import React, { useEffect, useState } from "react";
import "./styles/DetailView.css";
import { addToFavorites } from "../../actions/userActions";

const DetailView = () => {
  const [msg, setMsg] = useState("");
  useEffect(() => {
    console.log(localStorage.getItem("rol"));
    if (localStorage.getItem("rol") === "1") {
      window.location.href = "/profile/admin";
    } else if (localStorage.getItem("authenticated") === "false") {
      window.location.href = "/";
    }
  }, []);
  const addToFavorite = async () => {
    var data = {
      user_id: localStorage.getItem("id"),
      title: localStorage.getItem("title"),
      release_date: localStorage.getItem("release_date"),
      vote_average: localStorage.getItem("vote_average"),
      vote_count: localStorage.getItem("vote_count"),
      poster_path: localStorage.getItem("poster_path"),
      overview: localStorage.getItem("overview"),
    };
    await addToFavorites(data);
    if (
      localStorage.getItem("error") === "The movie is already registered" &&
      localStorage.getItem("success") === "false"
    ) {
      setMsg("Las película ya esta en tú lista de favoritos");
    } else {
      if (localStorage.getItem("success") === "true") {
        setMsg("Película agregada a tú lista de favoritos");
      } else {
        setMsg(
          "No fue posible agregar a favoritos, por favor intente nuevamente más tarde."
        );
      }
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h5>{localStorage.getItem("title")}</h5>
            <img
              className="cover"
              src={
                "https://image.tmdb.org/t/p/original/" +
                localStorage.getItem("poster_path")
              }
              alt={localStorage.getItem("title") ?? ""}
            ></img>
          </div>
          <div className="col-sm">
            <div style={{ marginTop: 20 }}></div>
            <button
              type="button"
              className="btn btn-warning"
              onClick={addToFavorite}
            >
              Agregar a favoritos
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-star-fill whiteText"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </button>
            <h4 style={{ marginTop: 20 }}>Resumen:</h4>
            <h5>{localStorage.getItem("overview")}</h5>
            <hr />
            <p>Calificación promedio: {localStorage.getItem("vote_average")}</p>
            <p>Número de votos: {localStorage.getItem("vote_count")}</p>
            <p>Lanzamiento: {localStorage.getItem("release_date")}</p>
            {msg && (
              <div className="alert alert-danger" role="alert">
                {msg}
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: "5%" }}></div>
      </div>
    </div>
  );
};

export default DetailView;

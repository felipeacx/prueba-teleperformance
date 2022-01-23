import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { getPelis } from "../../../actions/userActions";
import { Loading } from "../../components/Loading";
import "../styles/CardStyles.css";

export const UserProfile = () => {
  const [page, setPage] = useState(1);
  const sendData = (e: any) => {
    localStorage.setItem("movieId", e.id);
    localStorage.setItem("title", e.title);
    localStorage.setItem("poster_path", e.poster_path);
    localStorage.setItem("overview", e.overview);
    localStorage.setItem("release_date", e.release_date);
    localStorage.setItem("vote_average", e.vote_average);
    localStorage.setItem("vote_count", e.vote_count);
  };
  const showDetails = (e: any) => {
    sendData(e);
    window.location.href = "/details";
  };
  const loadPelis = async () => {
    const pelis = await getPelis(page);
    let pelisData = pelis.results.map((e: any) => (
      <div className="col mb-4" key={e.id}>
        <div className="card borde" onClick={() => showDetails(e)}>
          <div className="card-body">
            <h5 className="card-title">{e.title}</h5>
            <img
              src={"https://image.tmdb.org/t/p/original/" + e.poster_path}
              className="card-img-top"
              alt="..."
            ></img>
            <p className="card-text">{e.overview}</p>
            <p className="card-text">
              <small className="text-muted">
                Lanzamiento: {e.release_date}
              </small>
            </p>
          </div>
        </div>
      </div>
    ));
    ReactDOM.render(pelisData, document.getElementById("pelisLayout"));
  };
  useEffect(() => {
    if (localStorage.getItem("rol") === "2") {
      loadPelis();
    } else if (localStorage.getItem("rol") === "1") {
      window.location.href = "/profile/admin";
    } else {
      window.location.href = "/";
    }
  }, []);
  useEffect(() => {
    loadPelis();
  }, [page]);
  return (
    <div>
      {localStorage.getItem("loading") === "true" && <Loading />}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h2>Las mejores películas del momento</h2>
        <h5>Página: {page}</h5>
      </div>
      <div
        className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-5"
        id="pelisLayout"
      ></div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              onClick={() => {
                if (page > 1) {
                  setPage(page - 1);
                }
              }}
            >
              Anterior página
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              onClick={() => {
                setPage(page + 1);
              }}
            >
              Siguiente página
            </a>
          </li>
        </ul>
      </nav>
      <div style={{ marginBottom: "5%" }}></div>
    </div>
  );
};

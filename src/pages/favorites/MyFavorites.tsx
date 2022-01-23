import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { getFavorites } from "../../actions/userActions";

const MyFavorites = () => {
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
    const pelis = await getFavorites(localStorage.getItem("id") ?? "");
    let pelisData = pelis.map((e: any) => (
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
    if (localStorage.getItem("rol") === "1") {
      window.location.href = "/profile/admin";
    } else if (localStorage.getItem("authenticated") === "false") {
      window.location.href = "/";
    }
    loadPelis();
  }, []);
  return (
    <div>
      <div
        className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-5"
        id="pelisLayout"
      ></div>
    </div>
  );
};

export default MyFavorites;

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { AdminProfile } from "./pages/home/screens/AdminProfile";
import Home from "./pages/home/screens/Home";
import { UserProfile } from "./pages/home/screens/UserProfile";
import Login from "./pages/login/Login";
import RegisterUser from "./pages/register/RegisterUser";
import { Info } from "./pages/home/screens/Info";
import DetailView from "./pages/details/DetailView";
import MyFavorites from "./pages/favorites/MyFavorites";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route element={<Home />}>
        <Route path="/" element={<Info />} />
        <Route path="register" element={<RegisterUser />} />
        <Route path="profile/user" element={<UserProfile />} />
        <Route path="details" element={<DetailView />} />
        <Route path="myfavorites" element={<MyFavorites />} />
        <Route path="profile/admin" element={<AdminProfile />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>No hay nada por aquí</p>
            </main>
          }
        />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

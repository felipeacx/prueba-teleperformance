import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import { AdminProfile } from "./pages/home/screens/AdminProfile";
import Home from "./pages/home/screens/Home";
import { UserProfile } from "./pages/home/screens/UserProfile";
import { Login } from "./pages/login/Login";
import { persistStore } from "redux-persist";
import store from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="profile/user" element={<UserProfile />} />
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
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

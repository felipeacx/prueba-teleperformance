import axios from "axios";
import { api } from "../utils/config";

export const loginRequest = async (data: {
  email: string;
  password: string;
}) => {
  localStorage.setItem("loading", "true");
  try {
    const resp = await axios.post(`${api}/login`, data);
    localStorage.setItem("loading", "false");
    if (resp.data.successful) {
      localStorage.setItem("id", resp.data.body.user.id);
      localStorage.setItem("name", resp.data.body.user.name);
      localStorage.setItem("email", resp.data.body.user.email);
      localStorage.setItem("rol", resp.data.body.user.rol);
      localStorage.setItem("authenticated", resp.data.body.authenticated);
      localStorage.setItem("token", resp.data.body.token);
      localStorage.setItem("success", "true");
      localStorage.setItem("error", "");
    } else {
      localStorage.setItem("error", resp.data.message);
      localStorage.setItem("success", "false");
    }
  } catch (e: any) {
    console.log(e);
    localStorage.setItem("loading", "false");
    localStorage.setItem("error", e.message);
    localStorage.setItem("success", "false");
  }
};

export const logoutRequest = () => {
  localStorage.setItem("id", "");
  localStorage.setItem("name", "");
  localStorage.setItem("email", "");
  localStorage.setItem("rol", "");
  localStorage.setItem("authenticated", "false");
  localStorage.setItem("token", "");
  localStorage.setItem("success", "false");
  localStorage.setItem("error", "");
  localStorage.setItem("loading", "false");
};

export const registerRequest = async (data: {
  name: string;
  email: string;
  password: string;
  rol: string;
}) => {
  localStorage.setItem("loading", "true");
  try {
    const resp = await axios.post(`${api}/register`, data);
    localStorage.setItem("loading", "false");
    if (resp.data.successful) {
      localStorage.setItem("success", "true");
      localStorage.setItem("error", "");
    } else {
      localStorage.setItem("error", resp.data.message);
      localStorage.setItem("success", "false");
    }
  } catch (e: any) {
    console.log(e);
    localStorage.setItem("loading", "false");
    localStorage.setItem("error", e.message);
    localStorage.setItem("success", "false");
  }
};

export const getUsers = async (id: string, token: string) => {
  localStorage.setItem("loading", "true");
  try {
    const resp = await axios.get(`${api}/users`, {
      params: {
        id,
        token,
      },
    });
    localStorage.setItem("loading", "false");
    if (resp.data.successful) {
      localStorage.setItem("success", "true");
      localStorage.setItem("error", "");
      return resp.data.body.users;
    } else {
      localStorage.setItem("error", resp.data.message);
      localStorage.setItem("success", "false");
    }
  } catch (e: any) {
    console.log(e);
    localStorage.setItem("loading", "false");
    localStorage.setItem("error", e.message);
    localStorage.setItem("success", "false");
  }
};

export const getPelis = async (page: number) => {
  localStorage.setItem("loading", "true");
  try {
    const resp = await axios.get(`${api}/bestpelis`, {
      params: {
        page,
      },
    });
    localStorage.setItem("loading", "false");
    if (resp.data.successful) {
      localStorage.setItem("success", "true");
      localStorage.setItem("error", "");
      return resp.data.body.pelis;
    } else {
      localStorage.setItem("error", resp.data.message);
      localStorage.setItem("success", "false");
    }
  } catch (e: any) {
    console.log(e);
    localStorage.setItem("loading", "false");
    localStorage.setItem("error", e.message);
    localStorage.setItem("success", "false");
  }
};

export const addToFavorites = async (data: Object) => {
  localStorage.setItem("loading", "true");
  try {
    const resp = await axios.post(`${api}/newfavorite`, data);
    localStorage.setItem("loading", "false");
    if (resp.data.successful) {
      localStorage.setItem("success", "true");
      localStorage.setItem("error", "");
    } else {
      localStorage.setItem("error", resp.data.message);
      localStorage.setItem("success", "false");
    }
  } catch (e: any) {
    console.log(e);
    localStorage.setItem("loading", "false");
    localStorage.setItem("error", e.message);
    localStorage.setItem("success", "false");
  }
};

export const getFavorites = async (user_id: string) => {
  localStorage.setItem("loading", "true");
  try {
    const resp = await axios.get(`${api}/favorites`, {
      params: {
        user_id,
      },
    });
    localStorage.setItem("loading", "false");
    if (resp.data.successful) {
      localStorage.setItem("success", "true");
      localStorage.setItem("error", "");
      return resp.data.body.movies;
    } else {
      localStorage.setItem("error", resp.data.message);
      localStorage.setItem("success", "false");
    }
  } catch (e: any) {
    console.log(e);
    localStorage.setItem("loading", "false");
    localStorage.setItem("error", e.message);
    localStorage.setItem("success", "false");
  }
};

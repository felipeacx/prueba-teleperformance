import axios from "axios";
import { api } from "../../utils/config";
import { types } from "../types";

export const loginRequest =
  (data: { email: string; password: string }) => async (dispatch: any) => {
    var success = false;
    dispatch({
      type: types.LOADING,
    });
    try {
      const resp = await axios.post(`${api}/login`, data);
      dispatch({
        type: types.LOADED,
      });
      if (resp.data.successful) {
        return (success = true);
      } else {
        return success;
      }
    } catch (e: any) {
      console.log(e);
      dispatch({
        type: types.LOADED,
      });
      dispatch({
        type: types.SET_ERROR,
        payload: e.message,
      });
      return success;
    }
  };

export const registerRequest =
  (data: { name: string; email: string; password: string; rol: string }) =>
  async (dispatch: any) => {
    var success = false;
    dispatch({
      type: types.LOADING,
    });
    try {
      const resp = await axios.post(`${api}/register`, data);
      dispatch({
        type: types.LOADED,
      });
      if (resp.data.successful) {
        dispatch({
          type: types.LOGIN_REQUEST,
          payload: resp.data.body,
        });
        return (success = true);
      } else {
        return success;
      }
    } catch (e: any) {
      console.log(e);
      dispatch({
        type: types.LOADED,
      });
      dispatch({
        type: types.SET_ERROR,
        payload: e.message,
      });
      return success;
    }
  };

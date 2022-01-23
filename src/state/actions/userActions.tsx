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
      data.password = btoa(data.password);
      const resp = await axios.post(`${api}/login`, data);
      if (resp.data.successful) {
        return (success = true);
      } else {
        return success;
      }
    } catch (e: any) {
      console.log(e);
      dispatch({
        type: types.SET_ERROR,
        payload: e.message,
      });
      return success;
    }
  };
export const logoutRequest = (token: string) => async (dispatch: any) => {
  dispatch({
    type: types.LOADING,
  });
  try {
    const respLogout = await axios.put(
      `${api}/usuarios/closeSesion`,
      {},
      {
        headers: {
          token,
        },
      }
    );
  } catch (e: any) {
    console.log(e);
    dispatch({
      type: types.SET_ERROR,
      payload: e.message,
    });
  }
};

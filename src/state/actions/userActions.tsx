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
      console.log(resp.data);
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

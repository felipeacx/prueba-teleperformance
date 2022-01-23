import { types } from "../types";

const initialState = {
  user: {
    usuario: {},
  },
  rol: "",
  loading: false,
  error: "",
  authenticated: false,
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.LOADED:
      return {
        ...state,
        loading: false,
      };
    case types.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case types.LOGIN_REQUEST:
      return {
        ...state,
        user: action.payload.resultado.usuario,
        token: action.payload.resultado.token,
        authenticated: true,
      };
    case types.LOGOUT_REQUEST:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;

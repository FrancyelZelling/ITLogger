import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "../action/types";

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
  }
};

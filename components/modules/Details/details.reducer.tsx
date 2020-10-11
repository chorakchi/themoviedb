import {
  GET_DETAILS_DATA,
  GET_DETAILS_DATA_FAIL,
  GET_DETAILS_DATA_SUCCESS,
} from "./details.actions";

export const INITIAL_STATE = {
  loading: false,
  error: null,
  details: false,
};
export default (state: Object = INITIAL_STATE, action: actionType) => {
  const { payload } = action;
  switch (action.type) {
    case GET_DETAILS_DATA:
      return {
        ...state,
        loading: true,
        details: false,
      };
    case GET_DETAILS_DATA_SUCCESS:
      return {
        ...state,
        details: payload,
      };
    case GET_DETAILS_DATA_FAIL:
      return {
        ...state,
        error: payload,
        details: false,
      };
    default:
      return state;
  }
};

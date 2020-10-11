import {
  GET_GENRES_LIST_DATA,
  GET_GENRES_LIST_DATA_FAIL,
  GET_GENRES_LIST_DATA_SUCCESS,
} from "./genresList.actions";

export const INITIAL_STATE = {
  loading: false,
  error: null,
  genresList: [],
};
export default (state: Object = INITIAL_STATE, action: actionType) => {
  const { payload } = action;
  switch (action.type) {
    case GET_GENRES_LIST_DATA:
      return {
        ...state,
        loading: true,
        genresList: [],
      };
    case GET_GENRES_LIST_DATA_SUCCESS:
      return {
        ...state,
        genresList: payload.genres,
      };
    case GET_GENRES_LIST_DATA_FAIL:
      return {
        ...state,
        error: payload,
        genresList: [],
      };
    default:
      return state;
  }
};

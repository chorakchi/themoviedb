import {
  GET_MOVIES_LIST_DATA,
  GET_MOVIES_LIST_DATA_FAIL,
  GET_MOVIES_LIST_DATA_SUCCESS,
  RESET_MOVIES_LIST_DATA,
} from "./moviesList.actions";

export const INITIAL_STATE = {
  loading: false,
  error: null,
  moviesList: [],
  lastPage: 0,
};
export default (state: Object = INITIAL_STATE, action: actionType) => {
  const { payload } = action;
  switch (action.type) {
    case GET_MOVIES_LIST_DATA:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES_LIST_DATA_SUCCESS:
      return {
        ...state,
        moviesList: [...state.moviesList, ...payload.results],
        lastPage: payload.page,
      };
    case GET_MOVIES_LIST_DATA_FAIL:
      return {
        ...state,
        error: payload,
        moviesList: state.moviesList.moviesList,
        lastPage: state.moviesList.lastPage,
      };
    case RESET_MOVIES_LIST_DATA:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

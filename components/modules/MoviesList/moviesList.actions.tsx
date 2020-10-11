import { fetchMoviesList } from "./moviesList.service";

export const GET_MOVIES_LIST_DATA = "get_movies_list_data";
export const GET_MOVIES_LIST_DATA_FAIL = "get_movies_list_data_fail";
export const GET_MOVIES_LIST_DATA_SUCCESS = "get_movies_list_data_success";
export const RESET_MOVIES_LIST_DATA = "reset_movies_list_data";

export const getMoviesList = (param: Object) => (dispatch: Function) => {
  dispatch({
    type: GET_MOVIES_LIST_DATA,
  });

  return fetchMoviesList(param)
    .then((res) => {
      dispatch({
        type: GET_MOVIES_LIST_DATA_SUCCESS,
        payload: res,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_MOVIES_LIST_DATA_FAIL,
        payload: error,
      });
    });
};
export const resetMoviesList = () => (dispatch: Function) => {
  dispatch({
    type: RESET_MOVIES_LIST_DATA,
  });
};

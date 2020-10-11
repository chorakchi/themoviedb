import { fetchGenresList } from "./genresList.service";

export const GET_GENRES_LIST_DATA = "get_genres_list_data";
export const GET_GENRES_LIST_DATA_FAIL = "get_genres_list_data_fail";
export const GET_GENRES_LIST_DATA_SUCCESS = "get_genres_list_data_success";

export const getGenresList = (param: Object) => (dispatch: Function) => {
  dispatch({
    type: GET_GENRES_LIST_DATA,
  });

  return fetchGenresList(param)
    .then((res) => {
      dispatch({
        type: GET_GENRES_LIST_DATA_SUCCESS,
        payload: res,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_GENRES_LIST_DATA_FAIL,
        payload: error,
      });
    });
};

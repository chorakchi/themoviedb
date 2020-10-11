import { fetchDetails } from "./details.service";

export const GET_DETAILS_DATA = "get_details_data";
export const GET_DETAILS_DATA_FAIL = "get_details_data_fail";
export const GET_DETAILS_DATA_SUCCESS = "get_details_data_success";

export const getDetails = (param: Object) => (dispatch: Function) => {
  dispatch({
    type: GET_DETAILS_DATA,
  });

  return fetchDetails(param)
    .then((res) => {
      dispatch({
        type: GET_DETAILS_DATA_SUCCESS,
        payload: res,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_DETAILS_DATA_FAIL,
        payload: error,
      });
    });
};

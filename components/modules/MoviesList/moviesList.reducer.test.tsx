// @flow

import {
  GET_MOVIES_LIST_DATA,
  GET_MOVIES_LIST_DATA_FAIL,
  GET_MOVIES_LIST_DATA_SUCCESS,
} from "./moviesList.actions";
import reducer from "./moviesList.reducer";

export const INITIAL_STATE = {
  loading: false,
  error: null,
  moviesList: [],
  lastPage: 0,
};

describe("moviesList reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: "unknown", payload: "unknown" })).toEqual(
      INITIAL_STATE
    );
  });

  it("should handle GET_MOVIES_LIST_DATA", () => {
    expect(
      reducer(undefined, {
        type: GET_MOVIES_LIST_DATA,
      })
    ).toEqual({
      ...INITIAL_STATE,
      loading: true,
    });
  });
  it("should handle GET_MOVIES_LIST_DATA_SUCCESS", () => {
    const data = { results: [], page: 1 };
    expect(
      reducer(undefined, {
        type: GET_MOVIES_LIST_DATA_SUCCESS,
        payload: data,
      })
    ).toEqual({
      ...INITIAL_STATE,
      loading: false,
      error: null,
      moviesList: [],
      lastPage: 1,
    });
  });
  it("should handle GET_MOVIES_LIST_DATA_FAIL", () => {
    const error = { message: "i am error" };
    expect(
      reducer(undefined, {
        type: GET_MOVIES_LIST_DATA_FAIL,
        payload: error,
      })
    ).toEqual({
      ...INITIAL_STATE,
      error: error,
      loading: false,
      moviesList: undefined,
      lastPage: undefined,
    });
  });
});

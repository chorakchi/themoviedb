// @flow

import {
  GET_GENRES_LIST_DATA,
  GET_GENRES_LIST_DATA_FAIL,
  GET_GENRES_LIST_DATA_SUCCESS,
} from "./genresList.actions";
import reducer from "./genresList.reducer";

export const INITIAL_STATE = {
  loading: false,
  error: null,
  genresList: [],
};

describe("genresList reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: "unknown", payload: "unknown" })).toEqual(
      INITIAL_STATE
    );
  });

  it("should handle GET_GENRES_LIST_DATA", () => {
    expect(
      reducer(undefined, {
        type: GET_GENRES_LIST_DATA,
      })
    ).toEqual({
      ...INITIAL_STATE,
      loading: true,
    });
  });
  it("should handle GET_GENRES_LIST_DATA_SUCCESS", () => {
    const data = { genres: [] };
    expect(
      reducer(undefined, {
        type: GET_GENRES_LIST_DATA_SUCCESS,
        payload: data,
      })
    ).toEqual({
      ...INITIAL_STATE,
      loading: false,
      error: null,
      genresList: [],
    });
  });
  it("should handle GET_GENRES_LIST_DATA_FAIL", () => {
    const error = { message: "i am error" };
    expect(
      reducer(undefined, {
        type: GET_GENRES_LIST_DATA_FAIL,
        payload: error,
      })
    ).toEqual({
      ...INITIAL_STATE,
      error: error,
      loading: false,
    });
  });
});

// @flow

import {
  GET_DETAILS_DATA,
  GET_DETAILS_DATA_FAIL,
  GET_DETAILS_DATA_SUCCESS,
} from "./details.actions";
import reducer from "./details.reducer";

export const INITIAL_STATE = {
  loading: false,
  error: null,
  details: false,
};

describe("details reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: "unknown", payload: "unknown" })).toEqual(
      INITIAL_STATE
    );
  });

  it("should handle GET_DETAILS_DATA", () => {
    expect(
      reducer(undefined, {
        type: GET_DETAILS_DATA,
      })
    ).toEqual({
      ...INITIAL_STATE,
      loading: true,
    });
  });
  it("should handle GET_DETAILS_DATA_SUCCESS", () => {
    const data = {};
    expect(
      reducer(undefined, {
        type: GET_DETAILS_DATA_SUCCESS,
        payload: data,
      })
    ).toEqual({
      ...INITIAL_STATE,
      loading: false,
      error: null,
      details: {},
    });
  });
  it("should handle GET_DETAILS_DATA_FAIL", () => {
    const error = { message: "i am error" };
    expect(
      reducer(undefined, {
        type: GET_DETAILS_DATA_FAIL,
        payload: error,
      })
    ).toEqual({
      ...INITIAL_STATE,
      error: error,
      loading: false,
    });
  });
});

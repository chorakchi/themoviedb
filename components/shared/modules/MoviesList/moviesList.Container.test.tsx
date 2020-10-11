// @flow

import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { MoviesList } from "./moviesList.Container";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { mount } from "enzyme";
import { createStore } from "redux";
import { INITIAL_STATE as reducer } from "./moviesList.reducer";

describe("MoviesList unit test", () => {
  it("should render correctly", () => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({
      moviesList: reducer,
    });
    const subject = renderer
      .create(
        <Provider store={store}>
          <MoviesList />
        </Provider>
      )
      .toJSON();
    expect(subject).toMatchSnapshot();
  });
});

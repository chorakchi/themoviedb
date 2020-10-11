// @flow

import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { GenresList } from "./genresList.Container";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { mount } from "enzyme";
import { createStore } from "redux";
import { INITIAL_STATE as reducer } from "./genresList.reducer";

describe("GenresList unit test", () => {
  it("should render correctly", () => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({
      genresList: reducer,
    });
    const subject = renderer
      .create(
        <Provider store={store}>
          <GenresList />
        </Provider>
      )
      .toJSON();
    expect(subject).toMatchSnapshot();
  });
});

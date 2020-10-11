// @flow

import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { Details } from "./details.Container";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { mount } from "enzyme";
import { createStore } from "redux";
import { INITIAL_STATE as reducer } from "./details.reducer";

describe("details unit test", () => {
  it("should render correctly", () => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({
      details: reducer,
    });
    const subject = renderer
      .create(
        <Provider store={store}>
          <Details />
        </Provider>
      )
      .toJSON();
    expect(subject).toMatchSnapshot();
  });

  // const getWrapper = (mockStore = createStore(() => reducer, reducer)) =>
  //   mount(
  //     <Provider store={mockStore}>
  //       <Details />
  //     </Provider>
  //   );

  // it("should dispatch run  correctly ", () => {
  //   const mockStore = createStore(() => reducer, reducer);
  //   mockStore.dispatch = jest.fn();
  //   const wrapper = getWrapper(mockStore);
  //   wrapper.find("#filtersContainer").get(0);
  //   // .props.onChange("mockCallback");
  //   expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
  // });
});

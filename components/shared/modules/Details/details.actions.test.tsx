import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { GET_DETAILS_DATA, getDetails } from "./details.actions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("details actions", () => {
  it("creates GET_DETAILS_DATA when getDetails is called", () => {
    const expectedActions = [
      {
        type: GET_DETAILS_DATA,
      },
    ];
    const store = mockStore({});
    store.dispatch(getDetails());
    expect(store.getActions()).toEqual(expectedActions);
  });
});

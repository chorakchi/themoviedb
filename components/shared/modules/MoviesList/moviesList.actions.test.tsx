import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { GET_MOVIES_LIST_DATA, getMoviesList } from "./moviesList.actions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("getMoviesList actions", () => {
  it("creates GET_MOVIES_LIST_DATA when getMoviesList is called", () => {
    const expectedActions = [
      {
        type: GET_MOVIES_LIST_DATA,
      },
    ];
    const store = mockStore({});
    store.dispatch(getMoviesList({ genreId: "", page: "" }));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

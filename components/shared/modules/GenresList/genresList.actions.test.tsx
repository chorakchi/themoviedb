import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { GET_GENRES_LIST_DATA, getGenresList } from "./genresList.actions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("getGenresList actions", () => {
  it("creates GET_GENRES_LIST_DATA when getGenresList is called", () => {
    const expectedActions = [
      {
        type: GET_GENRES_LIST_DATA
      }
    ];
    const store = mockStore({});
    store.dispatch(getGenresList());
    expect(store.getActions()).toEqual(expectedActions);
  });
});

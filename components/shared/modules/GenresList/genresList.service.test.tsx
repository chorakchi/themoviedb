// @flow

import { get } from "./../../../services/request";
fetch = require("jest-fetch-mock");
import { fetchGenresList } from "./genresList.service";
jest.mock("./../../../services/request");

describe("fetch genres list Data", () => {
  it("should fire a valid get request ", () => {
    fetchGenresList();
    expect(get).toHaveBeenCalledTimes(1);
  });
});

// @flow

import { get } from "./../../../services/request";
fetch = require("jest-fetch-mock");
import { fetchMoviesList } from "./moviesList.service";
jest.mock("./../../../services/request");

describe("fetch genres list Data", () => {
  it("should fire a valid get request ", () => {
    fetchMoviesList({ genreId: "", page: "" });
    expect(get).toHaveBeenCalledTimes(1);
  });
});

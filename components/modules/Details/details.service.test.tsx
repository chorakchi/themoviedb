// @flow

import { get } from "./../../../services/request";
fetch = require("jest-fetch-mock");
import { fetchDetails } from "./details.service";
jest.mock("./../../../services/request");

describe("fetch details Data", () => {
  it("should fire a valid get request ", () => {
    fetchDetails();
    expect(get).toHaveBeenCalledTimes(1);
  });
});

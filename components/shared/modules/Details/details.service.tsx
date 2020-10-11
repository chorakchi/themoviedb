import { get } from "./../../../services/request";
import Constants from "expo-constants";

export const fetchDetails = (id: string) => {
  const uri = Constants.manifest.extra.REACT_APP_MOVIE_URL.replace(/ID/g, id);
  return get(uri);
};

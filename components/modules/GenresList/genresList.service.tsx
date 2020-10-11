import { get } from "./../../../services/request";
import Constants from "expo-constants";

export const fetchGenresList = () => {
  const uri = Constants.manifest.extra.REACT_APP_GENRE_URL;
  return get(uri);
};

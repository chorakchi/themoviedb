import { get } from "./../../../services/request";
import Constants from "expo-constants";

export const fetchMoviesList = (props) => {
  const uri = Constants.manifest.extra.REACT_APP_DISCOVER_URL.replace(
    /GENRE_ID/g,
    props.genreId
  ).replace(/PAGE_NUMBER/g, props.page);
  return get(uri);
};

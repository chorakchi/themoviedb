import { combineReducers } from "redux";
import genresListReducer from "../components/modules/GenresList/genresList.reducer";
import detailsReducer from "../components/modules/Details/details.reducer";
import moviesListReducer from "../components/modules/MoviesList/moviesList.reducer";

export default combineReducers({
  genres: genresListReducer,
  moviesList: moviesListReducer,
  details: detailsReducer,
});

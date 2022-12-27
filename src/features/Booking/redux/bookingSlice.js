import actions from "./type";
import produce from "immer";

const inititalState = {
  banners: [],
  movies: {},
  movieDetail: null,
  movieDetailSchedule: null,
  cinemas: [],
  cinemaschedule: [],
};

const reducer = (state = inititalState, { type, payload }) => {
  return produce(state, (draft) => {
    switch (type) {
      case actions.SET_BANNERS:
        draft.banners = payload;
        break;

      case actions.SET_MOVIES:
        draft.movies = payload;
        break;

      case actions.SET_MOVIE_DETAIL:
        draft.movieDetail = payload;
        break;

      case actions.SET_MOVIE_DETAIL_SCHEDULE:
        draft.movieDetailSchedule = payload;
        break;
      case actions.SET_CINEMAS:
        draft.cinemas = payload;
        break;
      case actions.SCHEDULE_CINEMAS:
        draft.cinemaschedule = payload;
        break;
      default:
        break;
    }
  });
};

export default reducer;

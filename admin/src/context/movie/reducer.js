import * as actionTypes from "./constants";

const initState = {
    movies: [],
    isFetching: false,
    error: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.GETALLMOVIE_PENDING:
            return {
                movies: null,
                isFetching: true,
                error: false,
            };
        case actionTypes.GETALLMOVIE_FULFILLED:
            return {
                movies: action.payload,
                isFetching: false,
                error: false,
            };
        case actionTypes.GETALLMOVIE_REJECTED:
            return {
                movies: null,
                isFetching: false,
                error: false,
            };
        case actionTypes.GETMOVIE_BYID_PENDING:
            return {
                movies: null,
                isFetching: true,
                error: false,
            };
        case actionTypes.GETMOVIE_BYID_FULFILLED:
            return {
                movies: action.payload,
                isFetching: false,
                error: false,
            };
        case actionTypes.GETMOVIE_BYID_REJECTED:
            return {
                movies: null,
                isFetching: false,
                error: false,
            };
        case "GET_MOVIE_BYID_PENDING":
            return {
                movies: [],
                isFetching: true,
                error: false,
            };
        case "GET_MOVIES_BYID_FULFILED":
            return {
                movies: action.payload,
                isFetching: false,
                error: false,
            };
        case "GET_MOVIES_BYID_REJECTED":
            return {
                movies: [],
                isFetching: false,
                error: true,
            };
        case "GET_MOVIES_START":
            return {
                movies: [],
                isFetching: true,
                error: false,
            };
        case "GET_MOVIES_SUCCESS":
            return {
                movies: action.payload,
                isFetching: false,
                error: false,
            };
        case "GET_MOVIES_FAILURE":
            return {
                movies: [],
                isFetching: false,
                error: true,
            };
        case "CREATE_MOVIE_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        case "CREATE_MOVIE_SUCCESS":
            return {
                movies: [...state.movies, action.payload],
                isFetching: false,
                error: false,
            };
        case "CREATE_MOVIE_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };
        case "UPLOAD_MOVIE_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        case "UPLOAD_MOVIE_SUCCESS":
            return {
                movies: state.movies.map(
                    (movie) =>
                        movie._id === action.payload._id && action.payload
                ),
                isFetching: false,
                error: false,
            };
        case "UPLOAD_MOVIE_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };
        case "DELETE_MOVIE_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        case "DELETE_MOVIE_SUCCESS":
            return {
                movies: state.movies.filter(
                    (movie) => movie._id !== action.payload
                ),
                isFetching: false,
                error: false,
            };
        case "DELETE_MOVIE_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };
        default:
            return { ...state };
    }
};

export { initState };
export default reducer;

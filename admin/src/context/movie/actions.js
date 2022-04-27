import * as actionTypes from "./constants";
import api from "../../api";
const getAllMoviePending = () => ({
    type: actionTypes.GETALLMOVIE_PENDING,
    payload: null,
});
const getAllMovieFulfilled = (movies) => ({
    type: actionTypes.GETALLMOVIE_FULFILLED,
    payload: movies,
});
const getAllMovieRejected = () => ({
    type: actionTypes.GETALLMOVIE_REJECTED,
    payload: null,
});
export const getAllMovies = async (dispatch) => {
    dispatch(getAllMoviePending());
    try {
        const res = await api.get("/movies", {
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem("user"))
                    .accessToken,
            },
        });
        dispatch(getAllMovieFulfilled(res.data));
    } catch (err) {
        dispatch(getAllMovieRejected());
    }
};
export const getMovieByIdPending = () => ({
    type: "GET_MOVIES_BYID_PENDING",
});
const getMovieByIdFulfilled = (movie) => ({
    type: "GET_MOVIES_BYID_FULFILED",
    payload: movie,
});
const getMovieByIdRejected = () => ({
    type: "GET_MOVIES_BYID_REJECTED",
});
export const getMoviesStart = () => ({
    type: "GET_MOVIES_START",
});

export const getMoviesSuccess = (movies) => ({
    type: "GET_MOVIES_SUCCESS",
    payload: movies,
});

export const getMoviesFailure = () => ({
    type: "GET_MOVIES_FAILURE",
});

export const createMovieStart = () => ({
    type: "CREATE_MOVIE_START",
});

export const createMovieSuccess = (movie) => ({
    type: "CREATE_MOVIE_SUCCESS",
    payload: movie,
});

export const createMovieFailure = () => ({
    type: "CREATE_MOVIE_FAILURE",
});

export const updateMovieStart = () => ({
    type: "UPDATE_MOVIE_START",
});

export const updateMovieSuccess = (movie) => ({
    type: "UPDATE_MOVIE_SUCCESS",
    payload: movie,
});

export const updateMovieFailure = () => ({
    type: "UPDATE_MOVIE_FAILURE",
});

export const deleteMovieStart = () => ({
    type: "DELETE_MOVIE_START",
});

export const deleteMovieSuccess = (id) => ({
    type: "DELETE_MOVIE_SUCCESS",
    payload: id,
});

export const deleteMovieFailure = () => ({
    type: "DELETE_MOVIE_FAILURE",
});
export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart());
    try {
        const res = await api.get("/movies", {
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem("user"))
                    .accessToken,
            },
        });
        dispatch(getMoviesSuccess(res.data));
    } catch (err) {
        dispatch(getMoviesFailure());
    }
};
export const getMovieById = async (id, dispatch) => {
    dispatch(getMovieByIdPending());
    try {
        const res = await api.get("/movies/find/" + id, {
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem("user"))
                    .accessToken,
            },
        });
        dispatch(getMovieByIdFulfilled(res.data));
    } catch (err) {
        dispatch(getMovieByIdRejected());
    }
};

//create
export const createMovie = async (movie, dispatch) => {
    dispatch(createMovieStart());
    try {
        const res = await api.post("/movies", movie, {
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem("user"))
                    .accessToken,
            },
        });
        dispatch(createMovieSuccess(res.data));
    } catch (err) {
        dispatch(createMovieFailure());
    }
};

//delete
export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMovieStart());
    try {
        await api.delete("/movies/" + id, {
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem("user"))
                    .accessToken,
            },
        });
        dispatch(deleteMovieSuccess(id));
    } catch (err) {
        dispatch(deleteMovieFailure());
    }
};

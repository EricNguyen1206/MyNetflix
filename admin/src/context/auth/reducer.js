import * as actionTypes from "./constant";

const initState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_PENDING:
            return {
                user: null,
                isFetching: true,
                error: false,
            };
        case actionTypes.LOGIN_FULFILL:
            return {
                user: action.payload,
                isFetching: false,
                error: false,
            };
        case actionTypes.LOGIN_REJECTED:
            return {
                user: null,
                isFetching: false,
                error: true,
            };
        case actionTypes.LOGOUT:
            return {
                user: null,
                isFetching: false,
                error: false,
            };
        default:
            return { ...state };
    }
};

export { initState };
export default reducer;

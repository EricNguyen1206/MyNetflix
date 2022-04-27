import * as actionTypes from "./constant";

const initState = {
    users: [],
    isFetching: false,
    error: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.GETUSERS_PENDING:
            return {
                users: null,
                isFetching: true,
                error: false,
            };
        case actionTypes.GETUSERS_FULFILLED:
            return {
                users: action.payload,
                isFetching: false,
                error: false,
            };
        case actionTypes.GETUSERS_REJECTED:
            return {
                users: null,
                isFetching: false,
                error: true,
            };
        case actionTypes.GETUSER_BYID_PENDING:
            return {
                users: null,
                isFetching: true,
                error: false,
            };
        case actionTypes.GETUSER_BYID_FULFILLED:
            return {
                users: action.payload,
                isFetching: false,
                error: false,
            };
        case actionTypes.GETUSER_BYID_REJECTED:
            return {
                users: null,
                isFetching: false,
                error: true,
            };
        case actionTypes.UPDATE_USER_PENDING:
            return {
                users: null,
                isFetching: true,
                error: false,
            };
        case actionTypes.UPDATE_USER_FULFILED:
            return {
                users: action.payload,
                isFetching: false,
                error: false,
            };
        case actionTypes.UPDATE_USER_REJECTED:
            return {
                users: null,
                isFetching: false,
                error: true,
            };
        default:
            return { ...state };
    }
};

export { initState };
export default reducer;

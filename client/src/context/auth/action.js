import axios from "axios";
import * as actionTypes from "./constant";

export const loginStart = () => ({
    type: actionTypes.LOGIN_START,
});
export const loginSuccess = (user) => ({
    type: actionTypes.LOGIN_SUCCESS,
    payload: user,
});
export const loginFailure = () => ({
    type: actionTypes.LOGIN_FAILURE,
});

//logout

export const logout = () => ({
    type: actionTypes.LOGOUT,
});

export const login = async (user, dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};

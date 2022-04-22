import api from "../../api";
import * as actionTypes from "./constant";

const loginPending = () => ({
    type: actionTypes.LOGIN_PENDING,
});
const loginFulfill = (user) => ({
    type: actionTypes.LOGIN_FULFILL,
    payload: user,
});
const loginRejected = () => ({
    type: actionTypes.LOGIN_REJECTED,
});

//logout

export const logout = () => {
    localStorage.removeItem("user");
    return {
        type: actionTypes.LOGOUT,
    };
};

export const login = async (user, dispatch) => {
    dispatch(loginPending());
    try {
        const res = await api.post("auth/login", user);
        dispatch(loginFulfill(res.data));
    } catch (err) {
        dispatch(loginRejected());
    }
};

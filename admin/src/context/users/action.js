import api from "../../api";
import * as actionTypes from "./constant";

const getAllUsersPending = () => ({
    type: actionTypes.GETUSERS_PENDING,
    payload: null,
});
const getAllUsersFulfilled = (users) => ({
    type: actionTypes.GETUSERS_FULFILLED,
    payload: users,
});
const getAllUsersRejectted = () => ({
    type: actionTypes.GETUSERS_REJECTED,
    payload: null,
});

const getUserByIdPending = () => ({
    type: actionTypes.GETUSER_BYID_PENDING,
});
const getUserByIdFulfilled = (users) => ({
    type: actionTypes.GETUSER_BYID_FULFILLED,
    payload: users,
});
const getUserByIdRejectted = () => ({
    type: actionTypes.GETUSER_BYID_REJECTED,
});

const updateUserPending = () => ({
    type: actionTypes.UPDATE_USER_PENDING,
});
const updateUserFulfiled = (newUser) => ({
    type: actionTypes.UPDATE_USER_FULFILED,
    payload: newUser,
});
const updateUserRejectted = () => ({
    type: actionTypes.UPDATE_USER_REJECTED,
});

export const getAllUsers = async (dispatch) => {
    dispatch(getAllUsersPending());
    try {
        const res = await api.get("users", {
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem("user"))
                    .accessToken,
            },
        });
        dispatch(getAllUsersFulfilled(res.data));
    } catch (err) {
        dispatch(getAllUsersRejectted());
    }
};

export const getUserById = async (id, dispatch) => {
    dispatch(getUserByIdPending());
    try {
        const res = await api.get("users/find/" + id, {
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem("user"))
                    .accessToken,
            },
        });
        dispatch(getUserByIdFulfilled(res.data));
        console.log("success", res.data);
    } catch (err) {
        console.log("err:", err);
        dispatch(getUserByIdRejectted());
    }
};

export const updateUser = async (id, newuser, dispatch) => {
    dispatch(updateUserPending());
    try {
        const res = await api.put("users/" + id, newuser, {
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem("user"))
                    .accessToken,
            },
        });
        dispatch(updateUserFulfiled(res.data));
    } catch (err) {
        dispatch(updateUserRejectted());
    }
};

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
    type: actionTypes.GETUSERS_FULFILLED,
    payload: null,
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

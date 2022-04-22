import api from "../../api";
export const getListsStart = () => ({
    type: "GET_LISTS_START",
});

export const getListsSuccess = (lists) => ({
    type: "GET_LISTS_SUCCESS",
    payload: lists,
});

export const getListsFailure = () => ({
    type: "GET_LISTS_FAILURE",
});

export const createListStart = () => ({
    type: "CREATE_LIST_START",
});

export const createListSuccess = (list) => ({
    type: "CREATE_LIST_SUCCESS",
    payload: list,
});

export const createListFailure = () => ({
    type: "CREATE_LIST_FAILURE",
});

export const updateListStart = () => ({
    type: "UPDATE_LIST_START",
});

export const updateListSuccess = (movie) => ({
    type: "UPDATE_LIST_SUCCESS",
    payload: movie,
});

export const updateListFailure = () => ({
    type: "UPDATE_LIST_FAILURE",
});

export const deleteListStart = () => ({
    type: "DELETE_LIST_START",
});

export const deleteListSuccess = (id) => ({
    type: "DELETE_LIST_SUCCESS",
    payload: id,
});

export const deleteListFailure = () => ({
    type: "DELETE_LIST_FAILURE",
});
export const getLists = async (dispatch) => {
    dispatch(getListsStart());
    try {
        const res = await api.get("/lists", {
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem("user"))
                    .accessToken,
            },
        });
        dispatch(getListsSuccess(res.data));
    } catch (err) {
        dispatch(getListsFailure());
    }
};

//create
export const createList = async (list, dispatch) => {
    dispatch(createListStart());
    try {
        const res = await api.post("/lists", list, {
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem("user"))
                    .accessToken,
            },
        });
        dispatch(createListSuccess(res.data));
    } catch (err) {
        dispatch(createListFailure());
    }
};

//delete
export const deleteList = async (id, dispatch) => {
    dispatch(deleteListStart());
    try {
        await api.delete("/lists/" + id, {
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem("user"))
                    .accessToken,
            },
        });
        dispatch(deleteListSuccess(id));
    } catch (err) {
        dispatch(deleteListFailure());
    }
};

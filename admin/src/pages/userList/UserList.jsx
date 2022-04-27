import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUsers } from "../../context";
import { getAllUsers } from "../../context/users/action";

export default function UserList() {
    const [data, setData] = useState(userRows);

    const [state, dispatch] = useUsers();
    let users = state.users ? state.users.reverse().slice(0, 5) : [];
    useEffect(() => {
        getAllUsers(dispatch);
    }, []);

    const handleDelete = (id) => {
        setData(data.filter((item) => item._id !== id));
    };

    const columns = [
        { field: "_id", headerName: "ID", width: 90 },
        {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img
                            className="userListImg"
                            src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                        />
                        {params.row.username}
                    </div>
                );
            },
        },
        { field: "email", headerName: "Email", width: 200 },
        {
            field: "password",
            headerName: "Password",
            width: 120,
        },
        {
            field: "isAdmin",
            headerName: "Is Admin",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row._id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="userListDelete"
                            onClick={() => handleDelete(params.row._id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="userList">
            <DataGrid
                rows={users}
                getRowId={(row) => row._id}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    );
}

import {
    CalendarToday,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
} from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";
import "./style.scss";
import React, { useState, useEffect } from "react";
import api from "../../api";

export default React.memo(function User() {
    const [user, setUser] = useState({});
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [admin, setAdmin] = useState(false);
    const [avt, setAvt] = useState(null);
    const id = useParams();
    useEffect(() => {
        let isMounted = true;
        async function getUserById(setData) {
            try {
                const res = await api.get("users/find/" + id.userId, {
                    headers: {
                        "x-access-token": JSON.parse(
                            localStorage.getItem("user")
                        ).accessToken,
                    },
                });
                if (isMounted) {
                    setData(res.data); // no more error
                    setUsername(res.data.username);
                    setEmail(res.data.email);
                    setAdmin(res.data.isAdmin);
                    setAvt(res.data.profilePic);
                }
            } catch (err) {
                console.log("err:", err);
            }
        }
        getUserById(setUser);
        return () => {
            isMounted = false;
        };
    }, []);
    const handleChange = (e) => {
        setAdmin(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let file = new FormData();
        avt && file.append("image", avt);
        const newUser = {
            username,
            email,
            profilePic: file,
            isAdmin: admin,
        };
        console.log("newUser:", newUser);
        try {
            api.put("/users/" + id.userId, newUser, {
                headers: {
                    "x-access-token": JSON.parse(localStorage.getItem("user"))
                        .accessToken,
                },
            }).then((res) => console.log("sucess:", res.data));
        } catch (e) {
            console.log("error:", e);
        }
    };
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img
                            src={
                                avt
                                    ? URL.createObjectURL(avt)
                                    : "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            }
                            alt=""
                            className="userShowImg"
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">
                                Anna Becker
                            </span>
                            <span className="userShowUserTitle">
                                Software Engineer
                            </span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">
                                {user.username}
                            </span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">
                                {user.createdAt}
                            </span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">
                                {`Is Admin: ${user.isAdmin}`}
                            </span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">
                                {user.email}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input
                                    type="text"
                                    placeholder="Example"
                                    className="userUpdateInput"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                    type="text"
                                    placeholder="example@gmail.com"
                                    className="userUpdateInput"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="userUpdateItem userUpdateRole">
                                <label>Admin</label>
                                <div style={{ display: "flex" }}>
                                    <div
                                        style={{
                                            display: "flex",
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            id="true"
                                            value={true}
                                            onChange={handleChange}
                                            name="isAdmin"
                                        />
                                        <label htmlFor="true">True</label>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            marginLeft: "40px",
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            id="false"
                                            value={false}
                                            onChange={handleChange}
                                            name="isAdmin"
                                        />
                                        <label htmlFor="false">False</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img
                                    className="userUpdateImg"
                                    // style={{ width: "500px" }}
                                    src={
                                        avt
                                            ? URL.createObjectURL(avt)
                                            : "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    }
                                    alt="Avatar"
                                />
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    style={{ display: "none" }}
                                    name="Avartar"
                                    onChange={(event) => {
                                        console.log(event.target.files[0]);
                                        setAvt(event.target.files[0]);
                                    }}
                                />
                            </div>
                            <button
                                className="userUpdateButton"
                                onClick={handleSubmit}
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
});

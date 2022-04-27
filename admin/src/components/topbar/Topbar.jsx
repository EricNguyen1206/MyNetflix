import React from "react";
import "./topbar.css";
import { ExitToAppOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import avartarDefault from "../../assets/image/avatar-default.jpg";
import { logout } from "../../context/auth/action";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context";

export default function Topbar() {
    const [state, dispatch] = useAuth();
    const user = state.user;
    const navigate = useNavigate();
    const handleLogout = async () => {
        await logout();

        navigate("/login");
    };
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <Link to="/">
                        <span className="logo">MyNetflix Admin</span>
                    </Link>
                </div>
                <div className="topRight">
                    <span className="username">{user.username}</span>
                    <img
                        src={avartarDefault}
                        alt="Avatar"
                        className="topAvatar"
                    />
                    <div className="topbarIconContainer">
                        <button
                            onClick={handleLogout}
                            style={{
                                backgroundColor: "transparent",
                                border: "none",
                                padding: 0,
                                fontSize: "inherit",
                            }}
                        >
                            <ExitToAppOutlined />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

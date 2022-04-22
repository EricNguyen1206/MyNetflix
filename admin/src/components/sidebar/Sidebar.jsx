import "./sidebar.css";
import {
    LineStyle,
    TocOutlined,
    PermIdentity,
    ExitToAppOutlined,
    AddShoppingCart,
    PlayCircleOutline,
    PersonAddOutlined,
    PlaylistAddOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { logout } from "../../context/auth/action";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate("/login");
    };
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <button
                                className="link"
                                onClick={handleLogout}
                                style={{
                                    backgroundColor: "transparent",
                                    border: "none",
                                    padding: 0,
                                    fontSize: "inherit",
                                }}
                            >
                                <ExitToAppOutlined className="sidebarIcon" />
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">User Management</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <PermIdentity className="sidebarIcon" />
                                Users
                            </li>
                        </Link>
                        <Link to="/newuser" className="link">
                            <li className="sidebarListItem">
                                <PersonAddOutlined className="sidebarIcon" />
                                Add New User
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Movie Management</h3>
                    <ul className="sidebarList">
                        <Link to="/movies" className="link">
                            <li className="sidebarListItem">
                                <PlayCircleOutline className="sidebarIcon" />
                                Movie
                            </li>
                        </Link>
                        <Link to="/newMovie" className="link">
                            <li className="sidebarListItem">
                                <AddShoppingCart className="sidebarIcon" />
                                Add New Movie
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <Link to="/lists" className="link">
                            <li className="sidebarListItem">
                                <TocOutlined className="sidebarIcon" />
                                List
                            </li>
                        </Link>
                        <Link to="/newList" className="link">
                            <li className="sidebarListItem">
                                <PlaylistAddOutlined className="sidebarIcon" />
                                Add List
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}

import "./sidebar.css";
import {
    TocOutlined,
    PermIdentity,
    AddShoppingCart,
    PlayCircleOutline,
    PersonAddOutlined,
    PlaylistAddOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quản lý tài khoản</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <PermIdentity className="sidebarIcon" />
                                Tài khoản
                            </li>
                        </Link>
                        <Link to="/newUser" className="link">
                            <li className="sidebarListItem">
                                <PersonAddOutlined className="sidebarIcon" />
                                Thêm tài khoản
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quản lý Phim</h3>
                    <ul className="sidebarList">
                        <Link to="/movies" className="link">
                            <li className="sidebarListItem">
                                <PlayCircleOutline className="sidebarIcon" />
                                Phim
                            </li>
                        </Link>
                        <Link to="/newMovie" className="link">
                            <li className="sidebarListItem">
                                <AddShoppingCart className="sidebarIcon" />
                                Thêm Phim
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quản lý Danh sách phim</h3>
                    <ul className="sidebarList">
                        <Link to="/lists" className="link">
                            <li className="sidebarListItem">
                                <TocOutlined className="sidebarIcon" />
                                Danh sách
                            </li>
                        </Link>
                        <Link to="/newList" className="link">
                            <li className="sidebarListItem">
                                <PlaylistAddOutlined className="sidebarIcon" />
                                Tạo danh sách
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}

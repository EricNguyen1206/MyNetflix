import React from "react";
import "./style.scss";
import locosrc from "../../assets/img/netflix_official_logo_icon.png";
import { Search, Notifications } from "@material-ui/icons";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="left">
                    <img src={locosrc} alt="logo" className="img" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search />
                    <span>KID</span>
                    <Notifications />
                </div>
            </div>
        </div>
    );
};

export default Navbar;

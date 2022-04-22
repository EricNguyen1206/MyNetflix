import { ArrowBackOutlined } from "@material-ui/icons";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.scss";

export default function Watch() {
    const location = useLocation();
    const movie = location.movie;
    return (
        <div className="watch">
            <Link to="/">
                <div className="back">
                    <ArrowBackOutlined />
                    Home
                </div>
            </Link>
            <video
                className="video"
                autoPlay
                progress
                controls
                src="https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg"
            ></video>
        </div>
    );
}

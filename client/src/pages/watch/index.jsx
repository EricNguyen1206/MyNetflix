import { ArrowBackOutlined } from "@material-ui/icons";
import "./style.scss";

export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video
                className="video"
                autoPlay
                progress
                controls
                src="https://www.youtube.com/watch?v=FzWG8jiw4XM"
            />
        </div>
    );
}

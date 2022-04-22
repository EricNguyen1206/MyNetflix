import "./style.scss";
import {
    PlayArrow,
    Add,
    ThumbUpAltOutlined,
    ThumbDownOutlined,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListItem({ index, item }) {
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get("/movies/find/" + item, {
                    headers: {
                        "x-access-token": JSON.parse(
                            localStorage.getItem("user")
                        ).accessToken,
                    },
                });
                setMovie(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getMovie();
    }, [item]);

    return (
        <Link
            to={{
                pathname: "/watch",
                movie: movie || {
                    _id: "6259e0459e86a692705fce40",
                    title: "shang chi 3",
                    desc: "test",
                    img: "https://image.thanhnien.vn/w1024/Uploaded/2022/tnabtw/2022_02_14/generic-poster-8842.jpg",
                    imgTitle:
                        "https://phantom-marca.unidadeditorial.es/0bbeda2f235a27f7b0c8cc73ccd57f55/resize/1320/f/jpg/assets/multimedia/imagenes/2021/08/28/16301568264883.jpg",
                    imgSm: "https://phantom-marca.unidadeditorial.es/0bbeda2f235a27f7b0c8cc73ccd57f55/resize/1320/f/jpg/assets/multimedia/imagenes/2021/08/28/16301568264883.jpg",
                    trailer: "https://www.youtube.com/watch?v=vfP-rsKVNKs",
                    video: "https://www.youtube.com/watch?v=3xccmeAsy8g",
                    year: "2022",
                    limit: 13,
                    genre: "comedy",
                    createdAt: "2022-04-15T21:14:45.380Z",
                    updatedAt: "2022-04-15T21:14:45.380Z",
                    __v: 0,
                    isSeries: true,
                },
            }}
        >
            <div
                className="listItem"
                style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={console.log("movie:", movie)}
            >
                <img src={movie?.imgSm} alt="" />
                {isHovered && (
                    <>
                        <video src={movie.trailer} autoPlay={true} loop />
                        <div className="itemInfo">
                            <div className="icons">
                                <PlayArrow className="icon" />
                                <Add className="icon" />
                                <ThumbUpAltOutlined className="icon" />
                                <ThumbDownOutlined className="icon" />
                            </div>
                            <div className="itemInfoTop">
                                <span>{movie.duration}</span>
                                <span className="limit">+{movie.limit}</span>
                                <span>{movie.year}</span>
                            </div>
                            <div className="desc">{movie.desc}</div>
                            <div className="genre">{movie.genre}</div>
                        </div>
                    </>
                )}
            </div>
        </Link>
    );
}

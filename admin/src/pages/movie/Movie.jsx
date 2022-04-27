import { Link, useParams } from "react-router-dom";
import "./movie.css";
import { Publish } from "@material-ui/icons";
import { useState, useEffect } from "react";
import api from "../../api";
import avartarDefault from "../../assets/image/avatar-default.jpg";

export default function Movie() {
    const [movie, setMovie] = useState({
        _id: "6259dffb9e86a692705fce26",
        title: "Batman",
        desc: "test",
        img: { avartarDefault },
        imgTitle: { avartarDefault },
        imgSm: { avartarDefault },
        trailer: "https://www.youtube.com/watch?v=vfP-rsKVNKs",
        video: "https://www.youtube.com/watch?v=3xccmeAsy8g",
        year: "2022",
        limit: 13,
        genre: "comedy",
        createdAt: "2022-04-15T21:13:31.260Z",
        updatedAt: "2022-04-15T21:13:31.260Z",
        __v: 0,
        isSeries: true,
    });
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");
    const [limit, setLimit] = useState("");
    const [trailer, setTrailer] = useState("");
    const [video, setVideo] = useState("");
    const id = useParams();
    console.log("id1:", id.movieId);
    useEffect(() => {
        console.log("id:", id.movieId);
        getMovieById(setMovie);
    }, []);
    function createToast() {
        let toast = document.createElement("div");
        toast.className = `toast success`;

        toast.innerHTML = `
    <span class="msg">Tính năng đang phát triển!</span>
    <span class="countdown"></span>
    `;
        document.querySelector("#toasts").appendChild(toast);

        setTimeout(() => {
            toast.style.animation = "hide_slide 1s ease forwards";
        }, 4000);
        setTimeout(() => {
            toast.remove();
        }, 6000);
    }
    async function getMovieById(setData) {
        try {
            await api
                .get("/movies/find/" + id.movieId, {
                    headers: {
                        "x-access-token": JSON.parse(
                            localStorage.getItem("user")
                        ).accessToken,
                    },
                })
                .then((res) => setData(res.data));
        } catch (err) {
            console.log("err:", err);
        }
    }

    const handleUpdate = () => {};

    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Movie</h1>
                <Link to="/newMovie">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img
                            src={avartarDefault}
                            alt=""
                            className="productInfoImg"
                        />
                        <span className="productName">{movie.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">
                                {movie._id}
                            </span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">genre:</span>
                            <span className="productInfoValue">
                                {movie.genre}
                            </span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">year:</span>
                            <span className="productInfoValue">
                                {movie.year}
                            </span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">limit:</span>
                            <span className="productInfoValue">
                                {movie.limit}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Movie Title</label>
                        <input type="text" placeholder="title" value={title} />
                        <label>Year</label>
                        <input type="text" placeholder="year" value={year} />
                        <label>Genre</label>
                        <input type="text" placeholder="genre" value={genre} />
                        <label>Limit</label>
                        <input type="text" placeholder="limit" value={limit} />
                        <label>Trailer</label>
                        <input
                            type="file"
                            placeholder="trailer"
                            value={trailer}
                        />
                        <label>Video</label>
                        <input type="file" placeholder="video" value={video} />
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img
                                src={movie.img}
                                alt=""
                                className="productUploadImg"
                            />
                            <label for="file">
                                <Publish />
                            </label>
                            <input
                                type="file"
                                id="file"
                                style={{ display: "none" }}
                            />
                        </div>
                        <button className="productButton" onClick={createToast}>
                            Update
                        </button>
                    </div>
                </form>
            </div>
            <div id="toasts"></div>
        </div>
    );
}

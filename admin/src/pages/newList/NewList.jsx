import { useEffect, useState } from "react";
import "./newList.css";
import { useNavigate } from "react-router-dom";
import { useMovie, useList } from "../../context";
import { getMovies } from "../../context/movie/actions";
import { createList } from "../../context/list/actions";

export default function NewList() {
    const [list, setList] = useState(null);
    const navigate = useNavigate();
    const [{}, dispatchLists] = useList();
    const [{ movies }, dispatchMovie] = useMovie();

    useEffect(() => {
        getMovies(dispatchMovie);
    }, [dispatchMovie]);

    const handleChange = (e) => {
        const value = e.target.value;
        setList({ ...list, [e.target.name]: value });
    };

    const handleSelect = (e) => {
        let value = Array.from(
            e.target.selectedOptions,
            (option) => option.value
        );
        setList({ ...list, [e.target.name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createList(list, dispatchLists);
        navigate("/lists");
    };

    return (
        <div className="newProduct">
            <h1 className="addProductTitle">New List</h1>
            <form className="addProductForm">
                <div className="formLeft">
                    <div className="addProductItem">
                        <label>Title</label>
                        <input
                            type="text"
                            placeholder="Popular Movies"
                            name="title"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="addProductItem">
                        <label>Genre</label>
                        <input
                            type="text"
                            placeholder="action"
                            name="genre"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="addProductItem">
                        <label>Type</label>
                        <select name="type" onChange={handleChange}>
                            <option>Type</option>
                            <option value="movie">Movie</option>
                            <option value="series">Series</option>
                        </select>
                    </div>
                </div>
                <div className="formRight">
                    <div className="addProductItem">
                        <label>Content</label>
                        <select
                            multiple
                            name="content"
                            onChange={handleSelect}
                            style={{ height: "280px" }}
                        >
                            {movies
                                ? movies.map((movie) => (
                                      <option key={movie._id} value={movie._id}>
                                          {movie.title}
                                      </option>
                                  ))
                                : []}
                        </select>
                    </div>
                </div>
                <button className="addProductButton" onClick={handleSubmit}>
                    Create
                </button>
            </form>
        </div>
    );
}

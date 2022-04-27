import "./widgetLg.css";
import { useMovie } from "../../context";
import { useEffect } from "react";
import { getAllMovies } from "../../context/movie/actions";

export default function WidgetLg() {
    const [state, dispatch] = useMovie();
    const movies = state.movies ? state.movies.slice(0, 4) : [];
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    };
    useEffect(() => {
        getAllMovies(dispatch);
    }, []);
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">New Movies</h3>
            <table className="widgetLgTable">
                <thead>
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Poster</th>
                        <th className="widgetLgTh">Name</th>
                        <th className="widgetLgTh">Genre</th>
                        <th className="widgetLgTh">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie, index) => (
                        <tr key={index} className="widgetLgTr">
                            <td className="widgetLgUser">
                                <img
                                    src={movie.img}
                                    alt={movie.desc}
                                    className="widgetLgImg"
                                />
                                <span className="widgetLgName">
                                    {movie.title}
                                </span>
                            </td>
                            <td className="widgetLgDate">{movie.desc}</td>
                            <td className="widgetLgAmount">{movie.genre}</td>
                            <td className="widgetLgStatus">
                                <Button type="Approved" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

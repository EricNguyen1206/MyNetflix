import { Navbar, Featured, List } from "../../components";
import "./style.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../api";

const Home = ({ type }) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await api.get(
                    `lists${type ? "?type=" + type : ""}${
                        genre ? "&genre=" + genre : ""
                    }`,
                    {
                        headers: {
                            "x-access-token": JSON.parse(
                                localStorage.getItem("user")
                            ).accessToken,
                        },
                    }
                );
                console.log("res random list:", res);
                setLists(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getRandomLists();
    }, [type, genre]);

    return (
        <div className="home">
            <Navbar />
            <Featured type={type} setGenre={setGenre} />
            {lists.map((list, index) => (
                <List key={index} list={list} />
            ))}
        </div>
    );
};

export default Home;

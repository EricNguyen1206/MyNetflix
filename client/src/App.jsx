import {
    BrowserRouter as Router,
    Routes,
    Route,
    Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import { Home, Register, Watch, Login } from "./pages";
import "./App.scss";

const App = () => {
    const { user } = useContext(AuthContext);
    return (
        <Router>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={user ? <Home /> : <Redirect to="/register" />}
                />
                <Route
                    path="register"
                    element={!user ? <Register /> : <Redirect to="/" />}
                />
                <Route
                    path="login"
                    element={!user ? <Login /> : <Redirect to="/" />}
                />
                {user && (
                    <>
                        <Route path="/movies" element={<Home type="movie" />} />
                        <Route
                            path="/series"
                            elelement={<Home type="series" />}
                        />
                        <Route path="/watch" elelement={<Watch />} />
                    </>
                )}
            </Routes>
        </Router>
    );
};

export default App;

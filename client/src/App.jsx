import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "./context";
import { Home, Register, Watch, Login } from "./pages";
import "./App.scss";

const App = () => {
    const [state, dispatch] = useAuth();
    const { user } = state;
    console.log("state:", state);
    return (
        <Router>
            <Routes>
                {user ? (
                    <>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/movies" element={<Home type="movie" />} />
                        <Route
                            path="/series"
                            elelement={<Home type="series" />}
                        />
                        <Route path="/watch" elelement={<Watch />} />
                    </>
                ) : (
                    <>
                        <Route exact path="/" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                    </>
                )}
            </Routes>
        </Router>
    );
};

export default App;

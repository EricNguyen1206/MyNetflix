import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "./context";
import { Home, Register, Watch, Login } from "./pages";
import "./App.scss";

const App = () => {
    const [state, dispatch] = useAuth();
    const { user } = state;
    return (
        <Router>
            <Routes>
                {console.log("user: ", user)}
                {user ? (
                    <>
                        {console.log("endpoint 1")}
                        <Route exact path="/" element={<Home />} />
                        <Route path="/movies" element={<Home type="movie" />} />
                        <Route
                            path="/series"
                            element={<Home type="serie  s" />}
                        />
                        <Route exact path="watch" element={<Watch />} />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                    </>
                ) : (
                    <>
                        <Route exact path="/" element={<Home />} />
                        <Route path="register" element={<Register />} />
                        <Route path="login" element={<Login />} />
                    </>
                )}
            </Routes>
        </Router>
    );
};

export default App;

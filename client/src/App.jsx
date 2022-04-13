import "./App.scss";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Watch from "./pages/watch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="watch" element={<Watch />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

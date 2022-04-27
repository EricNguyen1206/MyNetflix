import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { login } from "../../context/auth/action";
import { useAuth } from "../../context";

const Login = () => {
    const [email, setEmail] = useState("11a1eric3@gmail.com");
    const [password, setPassword] = useState("123456");
    const [state, dispatch] = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.hasOwnProperty("user") && state.user && !state.error) {
            navigate("/");
        }
    }, [state.user]);

    const handleLogin = (e) => {
        e.preventDefault();
        login({ email, password }, dispatch);
    };

    return (
        <div className="login">
            <form className="form">
                <h1 className="form-title">Login</h1>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="btn btn-login"
                    onClick={handleLogin}
                    disabled={state.isFetching}
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;

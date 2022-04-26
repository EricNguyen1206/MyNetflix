import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { login } from "../../context/auth/action";
import { useAuth } from "../../context";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [state, dispatch] = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (state.user && !state.error) {
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
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
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

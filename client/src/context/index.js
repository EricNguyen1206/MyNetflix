import { useContext } from "react";
import { default as AuthContext } from "./auth/Context";

export const useAuth = () => {
    const [state, dispatch] = useContext(AuthContext);
    return [state, dispatch];
};

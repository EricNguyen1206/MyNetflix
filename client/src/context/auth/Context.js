import { createContext, useReducer, useEffect } from "react";
import reducer, { initState } from "./reducer";

const Context = createContext();

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initState);

    useEffect(() => {
        localStorage.getItem("user", JSON.stringify(state.user));
    }, [state.user]);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
};

export { Provider };
export default Context;

import { createContext, useEffect, useReducer } from "react";
import reducer, { initState } from "./reducer";
import { getAllUsers } from "./action";

const Context = createContext();

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initState);
    useEffect(() => {
        getAllUsers(dispatch);
    }, []);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
};

export { Provider };
export default Context;

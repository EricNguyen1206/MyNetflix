import { createContext, useEffect, useReducer } from "react";
import reducer, { initState } from "./reducer";
import { getAllMovies } from "./actions";

const Context = createContext();

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
};

export { Provider };
export default Context;

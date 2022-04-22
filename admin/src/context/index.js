import { useContext } from "react";
import {
    default as AuthContext,
    Provider as AuthProvider,
} from "./auth/Context";
import {
    default as UsersContext,
    Provider as UsersProvider,
} from "./users/Context";
import {
    default as MovieContext,
    Provider as MovieProvider,
} from "./movie/Context";
import {
    default as ListContext,
    Provider as ListProvider,
} from "./list/Context";

// Custom Hooks for Context
export const useAuth = () => {
    const [state, dispatch] = useContext(AuthContext);
    return [state, dispatch];
};
export const useUsers = () => {
    const [state, dispatch] = useContext(UsersContext);
    return [state, dispatch];
};
export const useMovie = () => {
    const [state, dispatch] = useContext(MovieContext);
    return [state, dispatch];
};
export const useList = () => {
    const [state, dispatch] = useContext(ListContext);
    return [state, dispatch];
};

//Context Provider Wrapping
const StoreProvider = ({ children }) => {
    return (
        <AuthProvider>
            <UsersProvider>
                <ListProvider>
                    <MovieProvider>{children}</MovieProvider>
                </ListProvider>
            </UsersProvider>
        </AuthProvider>
    );
};

export default StoreProvider;

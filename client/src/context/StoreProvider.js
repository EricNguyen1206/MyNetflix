import { Provider as AuthProvider } from "./auth/Context";
import React from "react";

const StoreProvider = ({ children }) => {
    return <AuthProvider>{children}</AuthProvider>;
};

export default StoreProvider;

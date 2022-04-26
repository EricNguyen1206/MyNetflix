import React, { Suspense } from "react";
import "./App.scss";
import HomeTemplate from "./template/HomeTemplate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
    routeHome,
    routeAuth,
    routeUser,
    routeMovie,
    routeList,
} from "./routes";
// import { useAuth } from "./context";
import PageNotFound from "./pages/pageNotFound";

function App() {
    const renderLayoutHome = (routes) => {
        if (routes && routes.length > 0) {
            return routes.map((item, index) => {
                return (
                    <Route
                        key={index}
                        exact={item.exact}
                        path={item.path}
                        element={<HomeTemplate>{item.element}</HomeTemplate>}
                    />
                );
            });
        }
    };

    const renderLayoutAuth = (routes) => {
        if (routes && routes.length > 0) {
            return routes.map((item, index) => {
                return (
                    <Route
                        key={index}
                        exact={item.exact}
                        path={item.path}
                        element={item.element}
                    />
                );
            });
        }
    };
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {renderLayoutHome(routeHome)}
                    {renderLayoutHome(routeUser)}
                    {renderLayoutHome(routeMovie)}
                    {renderLayoutHome(routeList)}
                    {renderLayoutAuth(routeAuth)}
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;

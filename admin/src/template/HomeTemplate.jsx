import React from "react";
import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";

const LayoutHome = (props) => {
    return (
        <>
            <Topbar />
            <div className="container">
                <Sidebar />
                {props?.children}
            </div>
        </>
    );
};

const HomeTemplate = (props) => {
    return <LayoutHome>{props?.children}</LayoutHome>;
};

export default HomeTemplate;

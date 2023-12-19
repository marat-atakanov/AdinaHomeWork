import React from 'react';
import NavBar from "./NavBar";
import {Outlet} from "react-router-dom";

function Layout(props) {
    return (
        <>
            <NavBar/>
            <Outlet/>
            <footer><h3>Footer</h3></footer>
        </>
    );
}

export default Layout;
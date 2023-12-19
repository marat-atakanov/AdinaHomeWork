import React from 'react';
import {Link, NavLink} from "react-router-dom";

function NavBar() {
    return (
        <div className="nav">
            <NavLink to="/">main</NavLink>
            <NavLink to="/posts">posts</NavLink>
            <NavLink to="/form">form</NavLink>
        </div>
    );
}

export default NavBar;
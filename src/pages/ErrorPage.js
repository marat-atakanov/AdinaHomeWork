import React from 'react';
import {Link} from "react-router-dom";

function ErrorPage(props) {
    return (
        <div>404
            <Link to="/" >go back</Link>
        </div>
    );
}

export default ErrorPage;
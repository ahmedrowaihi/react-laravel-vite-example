import React from "react";
import { Link } from "react-router-dom";
function Auth() {
    return (
        <div>
            <h1>This is the Auth page</h1>
            <Link to="/">home</Link>
        </div>
    );
}

export default Auth;

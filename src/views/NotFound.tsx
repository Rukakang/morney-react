import {useLocation} from "react-router-dom";
import React from "react";

function NoMatch() {
    let location = useLocation();
    return (
        <h3>404 NOT FOUND <code>{location.pathname}</code></h3>
    );
}
export default NoMatch;
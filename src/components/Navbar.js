import React from "react";

export default function Navbar() {
    return (
        <nav>
            <img src = {process.env.PUBLIC_URL + 'images/logo.png'} className="logo"/>
            <p className="title">My travel journal.</p>
        </nav>
    )
}
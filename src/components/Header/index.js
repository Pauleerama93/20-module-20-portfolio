import React from "react";

import "./style.css"

function Header(props) {
    return (
    <header className="header-container"> 
    <h1>Ronald "Paulee" Nelson</h1>
        <img src="https://images.unsplash.com/photo-1564410267841-915d8e4d71ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW90aXZhdGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="Profile Quote"></img>
        {props.children}
    </header>

    );

}
export default Header;
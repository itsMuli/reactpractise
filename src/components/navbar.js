import React, {useState} from "react";
import {AiOutlineMenu} from "react-icons/ai";
import './navbar.css'

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="container">
                <h1 align="center" style={{marginLeft: '1rem', color: 'blueviolet'}}>Hotel Management</h1>
                <ul className="nav">
                    <li className="nav-item">
                        <a href="/">Registration</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">View_Registration</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">Login</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">Checkin</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">Viisitor_search</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">View_visitor</a>
                    </li>
                </ul>
                <div className="hamburger">
                    <AiOutlineMenu className="icon"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
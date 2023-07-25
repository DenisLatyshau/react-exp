import React from "react";
import { NavLink } from "react-router-dom";

const setActive = ({isActive}) => isActive ? 'active-link' : ''

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__links">
            <NavLink to="/about" className={setActive}>О сайте</NavLink>
            <NavLink to="/posts" className={setActive}>Посты</NavLink>
            </div>
        </div>
    )
}

export default Navbar
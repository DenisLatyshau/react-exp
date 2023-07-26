import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../../context";

const setActive = ({isActive}) => isActive ? 'active-link' : ''

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logOut = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <div className="navbar__links">
            <NavLink to="/about" className={setActive}>О сайте</NavLink>
            <NavLink to="/posts" className={setActive}>Посты</NavLink>
            <MyButton style={{marginLeft: '15px'}} onClick={logOut}>
                Выйти
            </MyButton>
            </div>
        </div>
    )
}

export default Navbar
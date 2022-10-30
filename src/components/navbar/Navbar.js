import React, {useState} from 'react'
import './navbar.css'
import logo from '../images/logo.png'
import heart from '../images/heart.png'
import personIcon from '../images/personIcon.png'


const Navbar = () => {

    const [menuToggle, setMenuToggle] = useState(false);

    return (
        <>
            <div className="navbarBackground">
                <img id="logo" src={logo} alt="logo"/>
                <div className={menuToggle ? "linksTab" : "undisplayed"}>
                    <p>Покупателей\собственников онлайн: 5</p>
                    <div className="nav-wrapper">
                        <div className="navLinks">
                            <a href="#">Как купить?</a>
                            <a href="#">Как продать?</a>
                            <a href="#">Новости</a>
                            <a href="#">О проекте</a>
                        </div>
                        <div className="personalLinks">
                            <img src={heart} alt="heart"/>
                            <a href="#">Избранное</a>
                            <img src={personIcon} alt="personIcon"/>
                            <a href="#">Личный кабинет</a>
                        </div>
                    </div>
                </div>
                <div className="menuBurger" onClick={() => setMenuToggle(!menuToggle)}>
                    <p>МЕНЮ</p>
                    <div className={menuToggle ? "menuSmallBarOpen" : "menuSmallBar"}></div>
                    <div className={menuToggle ? "menuBigBarOpen" : "menuBigBar"}></div>
                    <div className={menuToggle ? "menuSmallBarOpen" : "menuSmallBar"}></div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
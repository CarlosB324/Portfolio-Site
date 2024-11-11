import React from "react"
import { NavLink } from "react-router-dom"

export default function Header() {
    const[hamMenuActive, setHamMenuActive] = React.useState(false)
    const[displayNone, setDisplayNone] = React.useState(true)
    
    
    function openHamMenu() {
        setHamMenuActive(true)
        setDisplayNone(false)
    }
    
    function closeHamMenu() {
        setHamMenuActive(false)
        setDisplayNone(true)
        
    }
    
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "rgba(var(--main-color), 1)"
    }
    
    return (
        <header className="header">
            <div className="header__content">
                <div className="header__logo-container">
                    <div className="header__logo-img-cont">
                        <img
                        src="./assets/images/Me_Golfing.png"
                        alt="image of carlos"
                        className="header__logo-img"
                        />
                    </div>
                    <h2 className="header__logo-sub">Carlos Bonilla</h2>
                </div>
                <div className="header__main">
                    <ul className="header__links">
                        <li className="header__link-wrapper">
                            <NavLink 
                                to="/" 
                                className="header__link"
                                style={({ isActive }) => isActive ? activeStyles : null}
                            > 
                                Home
                            </NavLink>
                        </li>
                        <li className="header__link-wrapper">
                            <NavLink 
                                to="projects" 
                                className="header__link"
                                style={({ isActive }) => isActive ? activeStyles : null}
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li className="header__link-wrapper">
                            <NavLink 
                                to="about" 
                                className="header__link"
                                style={({ isActive }) => isActive ? activeStyles : null}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="header__link-wrapper">
                            <NavLink 
                                to="contact" 
                                className="header__link"
                                style={({ isActive }) => isActive ? activeStyles : null}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div className="header__main-ham-menu-cont">
                        <button 
                            className={`ham-menu-btn ${displayNone === false ? "d-none" : null}`} 
                            onClick={openHamMenu}
                        >
                            <img
                                src="../assets/svg/ham-menu.svg"
                                alt="hamburger menu"
                                className="header__main-ham-menu"
                            />
                        </button>
                        <button 
                            className={`ham-menu-btn ${displayNone === true ? "d-none" : null}`} 
                            onClick={closeHamMenu}
                        >
                            <img
                                src="../assets/svg/ham-menu-close.svg"
                                alt="hamburger menu close"
                                className="header__main-ham-menu-close"
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div className={`header__sm-menu ${hamMenuActive ? "header__sm-menu--active" : null}`}>
                <div className="header__sm-menu-content">
                    <ul className="header__sm-menu-links">
                        <li className="header__sm-menu-link">
                            <NavLink 
                                to="/"
                                onClick={closeHamMenu}
                                style={({ isActive }) => isActive ? activeStyles : null}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="header__sm-menu-link">
                            <NavLink 
                                to="projects"
                                onClick={closeHamMenu}
                                style={({ isActive }) => isActive ? activeStyles : null}
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li className="header__sm-menu-link">
                            <NavLink 
                                to="about"
                                onClick={closeHamMenu}
                                style={({ isActive }) => isActive ? activeStyles : null}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="header__sm-menu-link">
                            <NavLink 
                                to="contact"
                                onClick={closeHamMenu}
                                style={({ isActive }) => isActive ? activeStyles : null}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
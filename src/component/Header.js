import React from 'react';
import Logo from "../assets/pomodoro.png";

const Header = () => (
    <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <img src={Logo} alt="a pomodoro timer" />
            </div>
        </nav>
    </header>
)

export default Header

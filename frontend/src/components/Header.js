import React from 'react';
import headerLogo from './../images/logo_white.svg';
import { Route, Link } from "react-router-dom";

function Header({ email, signOut }) {
    return (
        <header className="header">
            <img className="logo" src={headerLogo} alt="Логотип Mesto" />
            <Route path="/signup">
                <Link className="header__nav" to="signin">Войти</Link>
            </Route>
            <Route path="/signin">
                <Link className="header__nav" to="signup">Регистрация</Link>
            </Route>
            <Route exact path="/">
                <p className="header__nav">{email}</p>
                <button className="header__nav-btn" onClick={signOut}><Link to="/" className="header__nav header__nav_signout">Выйти</Link></button>
            </Route>
        </header>
    );
}

export default Header;
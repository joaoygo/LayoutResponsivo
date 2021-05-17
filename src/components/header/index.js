import React, { useState } from 'react';
import LogoKazu from '../../assets/images/logokazu.png';
import './style.css';
import Menu from '../../assets/images/menu.png';

function header() {
    const [menuOpen, setMenuOpen] = useState(true);

    function handleMenu() {
        setMenuOpen(!menuOpen);
    }
    let menu;
    if (menuOpen === false) {
        menu = 'block';
    } else {
        menu = 'none';
    }

    return (
        <div className="header">
            <div className="header--body">
                <div className="logo">
                    <img src={LogoKazu} alt="Logo" />
                </div>
                <div className="menu">
                    <img
                        onClick={handleMenu}
                        className="menuopener"
                        src={Menu}
                        alt="menu"
                        style={{ cursor: 'pointer' }}
                    />

                    <nav className={`${menu}`}>
                        <ul>
                            <li>
                                <a className="active" href="/">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/"> About us</a>
                            </li>
                            <li>
                                <a href="/"> Services </a>
                            </li>
                            <li>
                                <a href="/"> Our Projects</a>
                            </li>
                            <li>
                                <a href="/"> Our Team</a>
                            </li>
                            <li>
                                <a href="/"> Contact Us </a>
                            </li>
                            <li />
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default header;

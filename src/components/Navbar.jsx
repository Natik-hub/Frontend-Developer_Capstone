import React from 'react'
import './index.css';
import {Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';

const Navbar = () => {
    return (
        <>
            <header>
                <img src={logo} alt='little lemon logo' />
                <nav class='nav-bar'>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                            <Link to='/'>About</Link>
                            <Link to='/'>Menu</Link>
                            <Link to='booking'>Reservation</Link>
                            <Link to='/'>Order Online</Link>
                            <Link to='/'>Login</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar

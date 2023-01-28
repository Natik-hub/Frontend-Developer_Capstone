import React from 'react'
import './index.css';
import {Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header>
                <img src='./Logo.svg' alt='little lemon logo' />
                <nav class='nav-bar'>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                            <Link to='/'>About</Link>
                            <Link to='/'>Menu</Link>
                            <Link to='/'>Reservation</Link>
                            <Link to='booking'>Order Online</Link>
                            <Link to='/'>Login</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar

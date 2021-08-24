import React from "react";
import { Link } from "react-router-dom";
import './header.scss';

export default function Header(){


    return(
        <div className='header'>
            <Link to='/menu' className='link'>Menu</Link>
            <Link to='/book' className='link'>Book</Link>
            <Link to='/' className='logo'>My Restaurant</Link>
            <Link to='/signup' className='link'>Signup</Link>
            <Link to='/login' className='link'>Login</Link>
        </div>
    )
}
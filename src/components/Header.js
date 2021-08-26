import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../context";
import './header.scss';

export default function Header(){
    const [loggedin, setLoggedin] = useState(false)
    const data = useContext(myContext)

    useEffect(()=>{
        setLoggedin(data.loggedin)
    },[data])

    const logout = () => {
        fetch('http://localhost:3001/logout',{
            method: 'GET',
            credentials: 'include',
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            data.dispatch({type:'SESSION', payload:false})
        })
    }
    return(
        <div className='header'>
            <Link to='/menu' className='link'>Menu</Link>
            <Link to='/book' className='link'>Book</Link>
            <Link to='/' className='logo'>My Restaurant</Link>
            {loggedin ? (
            <>
                <Link to='/signup' className='link'>Signup</Link>
                <Link to='/login' className='link'>Login</Link>
            </>
            ):(
            <>
                <Link to='/profile' className='link'>Profile</Link>
                <p onClick={()=>logout()} className='link'>Logout</p>
            </> 
            )}
            
        </div>
    )
}
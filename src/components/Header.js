import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../context";
import './header.scss';

export default function Header(){
    const [loggedin, setLoggedin] = useState(false)
    const data = useContext(myContext)

    useEffect(()=>{
        setLoggedin(data.state.loggedin)
        console.log(loggedin)
    },[data])

    const logout = () => {
        data.dispatch({type:'RESERVATION', payload:false})
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
            <Link to='/reserve' className='link'>Reserve</Link>
            <Link to='/' className='logo'>My Restaurant</Link>
            {loggedin ? (
            <>
                <Link to='/profile' className='link'>Profile</Link>
                <a onClick={()=>logout()} className='link'>Logout</a>
            </>
            ):(
            <>
                <Link to='/signup' className='link'>Signup</Link>
                <Link to='/login' className='link'>Login</Link>
            </> 
            )}
            
        </div>
    )
}
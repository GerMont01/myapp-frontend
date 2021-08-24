import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    div: {
        marginTop: '200px',
        margin: 'auto',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        fontFamily: "'Kaisei Opti', serif"
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        width:'40%',
    },
    input: {
        backgroundColor: 'rgb(248, 248, 248)',
        border: 'none',
        borderRadius: '5px',
        width: '100%',
        padding: '5px',
        margin: '5px',
        textAlign: 'center',
        fontFamily: "'Kaisei Opti', serif"
    },
    button: {
        border: 'none',
        outline: 'none',
        borderRadius: '5px',
        width: '102%',
        padding: '6px',
        margin: '5px',
        fontFamily: "'Kaisei Opti', serif"
    },
    link: {
        width: '103%',
        textDecoration: 'none',
        color: 'black',
        textAlign: 'center',
        fontSize: '14px'
    }
});



export default function Login(){

    const classes = useStyles();

    const [login, setLogin] = useState({})

    useEffect(()=>{
        let myHeaders = new Headers();
        myHeaders.append('Authorization','Basic ' + btoa(`${login.username}:${login.password}`))
        myHeaders.append('Content-Type', 'application/json')
        fetch('http://localhost:3001/login',{
            method: 'GET',
            headers: myHeaders
        })
        .then(res=>res.json())
        .then(res=>console.log(res))
    },[login])

    const loginHandler = (e) => {
        e.preventDefault()

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        setLogin({username:username,password:password})
    }

    return(
        <div className={classes.div}>
            <form className={classes.form}>
                <input className={classes.input} id='username' type='text' placeholder='User Name' required/>
                <input className={classes.input} id='password' type='password' placeholder='Password' required/>
                <button className={classes.button} onClick={(e)=>loginHandler(e)}>Submit</button>
                <Link className={classes.link} to='/forgotpassword' >Forgot your password?</Link>
            </form>
        </div>
    )
}
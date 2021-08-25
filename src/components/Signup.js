import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    div: {
        marginTop: '200px',
        margin: 'auto',
        display:'flex',
        flexDirection:'column',
        alignItems:'center' 
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
    }
});

export default function Signup(){

    const classes = useStyles();

    const signupHandler = (e) => {
        e.preventDefault()
        
        const email = document.getElementById('emailS').value;
        const username = document.getElementById('usernameS').value;
        const password = document.getElementById('passwordS').value;
        const password2 = document.getElementById('password2S').value;

        fetch('http://localhost:3001/signup',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({email,username,password,password2})
        })
        .then(res=>res.json())
        .then(res=>console.log(res))
    }

    return(
        <div className={classes.div}>
            <form className={classes.form}>
                <input className={classes.input} id='emailS' type='text' placeholder='Enter your Email' required/>
                <input className={classes.input} id='usernameS'  type='text' placeholder='Enter your User Name' required/>
                <input className={classes.input} id='passwordS'  type='password' placeholder='Enter your Password' required/>
                <input className={classes.input} id='password2S'  type='password' placeholder='Verify Password' required/>
                <button className={classes.button} onClick={(e)=>signupHandler(e)}>Submit</button>
            </form>
        </div>
    )
}

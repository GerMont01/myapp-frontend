import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    div: {
        width:'50%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
    },
    input: {
        border: 'none',
        borderRadius: '5px',
        width: '100%',
        padding: '5px',
        margin: '5px'
    },
    button: {
        border: 'none',
        outline: 'none',
        borderRadius: '5px',
        width: '100%',
        padding: '5px',
        margin: '5px'
    }
});

export default function Login(){

    const classes = useStyles();

    return(
        <div className={classes.div}>
            <p>Login</p>
            <form className={classes.form}>
                <input className={classes.input} type='text' placeholder='User Name' required/>
                <input className={classes.input} type='password' placeholder='Password' required/>
                <button className={classes.button}>Submit</button>
                <Link to='/forgotpassword' >Forgot your password?</Link>
            </form>
        </div>
    )
}
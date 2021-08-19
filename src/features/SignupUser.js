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

export default function SignupUser(){

    const classes = useStyles();

    return(
        <div className={classes.div}>
            <p>Sign Up as User</p>
            <form className={classes.form}>
                <input className={classes.input} type='text' placeholder='Enter your Email' required/>
                <input className={classes.input} type='text' placeholder='Enter your User Name' required/>
                <input className={classes.input} type='password' placeholder='Enter your Password' required/>
                <input className={classes.input} type='password' placeholder='Verify Password' required/>
                <button className={classes.button}>Submit</button>
            </form>
        </div>
    )
}


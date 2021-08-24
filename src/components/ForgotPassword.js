import React from "react";
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
    }
});

export default function ForgotPassword(){

    const classes = useStyles();

    return(
        <div className={classes.div}>
            <form className={classes.form}>
                <input className={classes.input} type='text' placeholder='Enter your Email' required/>
                <input className={classes.input} type='text' onKeyUp={e => e.target.value = e.target.value.toUpperCase()} placeholder='Enter verification Code' required/>
                <button className={classes.button}>Submit</button>
            </form>
        </div>
    )
}
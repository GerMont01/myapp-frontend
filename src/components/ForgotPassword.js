import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

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
        fontFamily: "'Kaisei Opti', serif",
        boxShadow: "0 0px 5px 1px rgba(0, 0, 0, 0.1) inset"
    },
    button: {
        border: 'none',
        outline: 'none',
        borderRadius: '5px',
        width: '102%',
        padding: '6px',
        margin: '5px',
        fontFamily: "'Kaisei Opti', serif",
        boxShadow: "0 0px 5px 1px rgba(0, 0, 0, 0.1) inset"
    }
});

export default function ForgotPassword(){

    const classes = useStyles();
    const history = useHistory();

    const forgotpHandler = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/forgotpassword',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    email: document.getElementById('email').value, 
                    code:document.getElementById('code').value
                })
            })
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
                if (res === true){
                    history.push('changepassword')
                }
            })
    }

    return(
        <div className={classes.div}>
            <form className={classes.form}>
                <input className={classes.input} id='email' type='text' placeholder='Enter your Email' required/>
                <input className={classes.input} id='code' type='text' onKeyUp={e => e.target.value = e.target.value.toUpperCase()} placeholder='Enter verification Code' required/>
                <button className={classes.button} onClick={(e)=>forgotpHandler(e)}>Submit</button>
            </form>
        </div>
    )
}
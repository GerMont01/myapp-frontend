import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { useContext } from "react";
import { myContext } from "../context";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    div: {
        marginTop: '200px',
        margin: 'auto',
        display:'flex',
        flexDirection:'column',
        alignItems:'center' ,
        justifyContent:'center'
    },
    div2: {
        width: '100%',
        // padding: '0 10px',
        display:'flex',
        justifyContent: 'space-between'
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
        width: '96%',
        padding: '5px',
        margin: '5px auto',
        textAlign: 'center',
        fontFamily: "'Kaisei Opti', serif",
        boxShadow: "0 0px 5px 1px rgba(0, 0, 0, 0.1) inset"
    },
    input2: {
        backgroundColor: 'rgb(248, 248, 248)',
        border: 'none',
        borderRadius: '5px',
        width: '45%',
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
        width: '98%',
        padding: '6px',
        margin: '5px auto',
        fontFamily: "'Kaisei Opti', serif",
        boxShadow: "0 0px 5px 1px rgba(0, 0, 0, 0.1) inset"
    }
});

export default function Signup(){
    const data = useContext(myContext)
    const history = useHistory();
    const classes = useStyles();

    const signupHandler = (e) => {
        e.preventDefault()

        fetch('http://localhost:3001/signup',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                email: document.getElementById('emailS').value,
                firstname: document.getElementById('firstname').value,
                lastname: document.getElementById('lastname').value,
                password: document.getElementById('passwordS').value,
                password2: document.getElementById('password2S').value
            })
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            if (res === true){
                data.dispatch({type:'SESSION', payload:true})
                history.push('/')
            }
        })
    }

    return(
        <div className={classes.div}>
            <form className={classes.form}>
                <input className={classes.input} id='emailS' type='text' placeholder='Enter your Email' required/>
                <div className={classes.div2}>
                    <input className={classes.input2} id='firstname'  type='text' placeholder='Enter your First Name' required/>
                    <input className={classes.input2} id='lastname'  type='text' placeholder='Enter your Last Name' required/>
                </div>
                <input className={classes.input} id='passwordS'  type='password' placeholder='Enter your Password' required/>
                <input className={classes.input} id='password2S'  type='password' placeholder='Verify Password' required/>
                <button className={classes.button} onClick={(e)=>signupHandler(e)}>Register</button>
            </form>
        </div>
    )
}

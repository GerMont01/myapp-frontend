import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { myContext } from "../context";
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

    const data = useContext(myContext);
    const classes = useStyles();

    const history = useHistory();

    const loginHandler = (e) => {
        e.preventDefault()
      
        fetch('http://localhost:3001/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                email:document.getElementById('emailL').value, 
                password:document.getElementById('passwordL').value
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
                <input className={classes.input} id='emailL' type='text' placeholder='Enter your Email' required/>
                <input className={classes.input} id='passwordL' type='password' placeholder='Password' required/>
                <button className={classes.button} onClick={(e)=>loginHandler(e)}>Submit</button>
                <Link className={classes.link} to='/forgotpassword' >Forgot your password?</Link>
            </form>
        </div>
    )
}
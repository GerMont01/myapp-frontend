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

export default function ChangePassword(){

    const classes = useStyles();
    const history = useHistory();

    const changePasswordHandler = () => {

        fetch('http://localhost:3001/changepassword',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({ 
                    password:document.getElementById('newpassword').value, 
                    password2:document.getElementById('newpassword2').value 
                })
            })
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
                if (res === true){
                    history.push('/')
                } else {
                    history.push('forgotpassword')
                }
            })
    }

    return(
        <div  className={classes.div}>
            <form onSubmit={(e)=>{e.preventDefault();changePasswordHandler()}} className={classes.form}>
                <input className={classes.input} id='newpassword' type='password' placeholder='Enter new Password' required/>
                <input className={classes.input} id='newpassword2' type='password' placeholder='Verify new Password' required/>
                <button className={classes.button} type='submit'>Change Password</button>
            </form>
        </div>
    )
}
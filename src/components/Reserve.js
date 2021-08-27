import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../context";
import { makeStyles } from '@material-ui/core/styles';
import TimePicker from 'react-time-picker';
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
})

export default function Reserve(){

    const data = useContext(myContext)
    const history = useHistory();
    const classes = useStyles();

    const [value, onChange] = useState('10:00');
    const [ message, setMessage ] = useState();

    const reserveHandler = () => {
        const reservation = {
            numOfPeople:document.getElementById('numOfPeople').value, 
            time:value
        }
        fetch('http://localhost:3001/reserve',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(reservation)
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            if (res){
                data.dispatch({type:'RESERVATION', payload:res})
                history.push('/')
            } else {
                setMessage('Tables unavailable at that time, please try again')
            }
        })
    }
    return(
        <div className={classes.div}>
            {message ? (
                <p className={classes.p}>{message}</p>
            ):(
                <></>
            )}
            <form onSubmit={(e)=>{e.preventDefault();reserveHandler()}} className={classes.form}>
                <input className={classes.input} type='text' id='numOfPeople' placeholder='Enter the number of people' required/>
                <TimePicker 
                        className={classes.input}
                        onChange={onChange}
                        value={value}
                    />
                <button className={classes.button} type='submit'>Reserve</button>
            </form>
        </div>
    )
}
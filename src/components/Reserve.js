import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../context";
import { makeStyles } from '@material-ui/core/styles';
import TimePicker from 'react-time-picker';

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

    const classes = useStyles();

    const [value, onChange] = useState('10:00');

    const reserveHandler = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/reserve',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                numOfPeople:document.getElementById('numOfPeople').value, 
                Time:value
            })
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            if (res === true){
                
            }
        })
    }
    return(
        <div className={classes.div}>
            <form className={classes.form}>
                <input className={classes.input} type='text' id='numOfPeople' placeholder='Enter the number of people' required/>
                <TimePicker 
                        className={classes.input}
                        onChange={onChange}
                        value={value}
                    />
                <button className={classes.button} onClick={(e)=>reserveHandler(e)}>Reserve</button>
            </form>
        </div>
    )
}
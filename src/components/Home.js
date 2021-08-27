import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Signup from "./Signup";
import Grid from '@material-ui/core/Grid';
import { useContext } from "react";
import { myContext } from "../context";


const useStyles = makeStyles({
    root: {
        position: 'relative',
        paddingTop: '100px',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
    },
    reservation: {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Kaisei Opti', serif",
        textAlign: 'center'
    }
});


export default function Home(){
    const [ reservation, setReservation ] = useState()
    const data = useContext(myContext)

    useEffect(()=>{
        if (data.state.reservation) setReservation(data.state.reservation)
    },[data])

    useEffect(()=>{
        fetch('http://localhost:3001/api',{
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
            .then(res=>res.json())
            .then(data=>console.log(data))
    },[])

    const classes = useStyles();

    return(
        <Grid container spacing={1} className={classes.root}>
            {reservation ? (
                <div className={classes.reservation}>
                    <p>You have a reservation with the following details:</p>
                    <p>{reservation.name}</p>
                    <p># of people: {reservation.numOfPeople} At: {reservation.time}</p>
                </div>
            ):(<></>)}
        </Grid>
    )
}
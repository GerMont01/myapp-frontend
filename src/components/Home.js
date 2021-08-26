import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Signup from "./Signup";
import Grid from '@material-ui/core/Grid';
import TimePicker from 'react-time-picker';


const useStyles = makeStyles({
    root: {
        position: 'relative',
        paddingTop: '100px',
        color: 'white',
        width: '100%'
    },
    div: {
        height: '300px',
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        width: '100%'
    }
});


export default function Home(){
    const [value, onChange] = useState('10:00');
    
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
    console.log(value)
    return(
        <Grid container spacing={1} className={classes.root}>
            {/* <Grid item xs={12} className={classes.div}>
                 Banner
                <div>
                    <TimePicker
                        onChange={onChange}
                        value={value}
                    />
                </div>

            </Grid>
            <Grid item xs={12} className={classes.div}>
                How it works
            </Grid>
            <Grid item xs={12} className={classes.div}>
                <Signup />
            </Grid>   */}
        </Grid>
    )
}
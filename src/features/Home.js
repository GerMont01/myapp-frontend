import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Signup from "./Signup";
import Grid from '@material-ui/core/Grid';


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
    
    const classes = useStyles();

    return(
        <Grid container spacing={1} className={classes.root}>
            <Grid item xs={12} className={classes.div}>
                Banner
            </Grid>
            <Grid item xs={12} className={classes.div}>
                How it works
            </Grid>
            <Grid item xs={12} className={classes.div}>
                <Signup />
            </Grid>  
        </Grid>
    )
}
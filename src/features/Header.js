import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    header: {
        position: 'absolute',
        background: 'linear-gradient(45deg, #ffb84d 30%, #e68a00 90%)',
        borderRadius: '0 0 0 100px',
        boxShadow: '0 1px 3px 2px #ffb84d46',
        color: 'white',
        height: '7vh',
        top: '0',
        right: '0',
        width: '30vw',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    logo: {
        paddingLeft: '10px',
        margin: 'auto',
        width: 'fit-content',
        height: 'fit-content',
        zIndex: 10
    }
});


export default function Header(){

    const classes = useStyles();

    return(
        <div className={classes.header}>
            <Link to='/' className={classes.logo}>My Logo</Link>
            <Link to='/login' className={classes.logo}>Login</Link>
        </div>
    )
}
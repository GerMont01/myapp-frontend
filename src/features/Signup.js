import SignupSeller from "./SignupSeller";
import SignupUser from "./SignupUser";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        width:'100%'
    }
});


export default function Signup(){

    const classes = useStyles();
    return(
        <div className={classes.root}>
            <SignupUser/>
            <SignupSeller/>
        </div>
    )
}
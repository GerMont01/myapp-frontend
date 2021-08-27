import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Reserve from './components/Reserve';
import Menu from './components/Menu';
import Profile from './components/Profile';
import Signup from './components/Signup';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import ChangePassword from './components/ChangePassword';


const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    padding: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.929)'
  },
});


function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/reserve' component={Reserve}/>
          <Route path='/Menu' component={Menu}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/forgotpassword' component={ForgotPassword}/>
          <Route path='/changepassword' component={ChangePassword}/>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;

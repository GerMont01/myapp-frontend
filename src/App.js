import React from 'react';
import Header from './features/Header';
import Home from './features/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Login from './features/Login';
import ForgotPassword from './features/ForgotPassword';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(65, 65, 65)',
    padding: 0
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
          <Route path='/forgotpassword' component={ForgotPassword}/>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;

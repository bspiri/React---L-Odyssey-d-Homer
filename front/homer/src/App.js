import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Profile from "./Components/Profile";
import './App.css';
import { Grid, Paper } from "@material-ui/core";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

function App() {
  return (
    <MuiThemeProvider>
      <Grid container
        alignItems='center'
        style={{ height: '100%' }}>
        <Grid item xs={12}>
          <Paper
            elevation={4}
            style={{ margin: 32 }}>
            <Grid container
              alignItems='center'
              alignContent='center'
              justify='center'>
              <Grid item xs={12} sm={6}
                style={{ 'textAlign': 'center' }}>
                <img src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" alt="homer" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Router>
                  <Switch>
                    <Route exact path="/">
                      <SignIn />
                    </Route>
                    <Route path="/signin">
                      <SignIn />
                    </Route>
                    <Route path="/signup">
                      <SignUp />
                    </Route>
                    <Route path="/profile">
                      <Profile />
                    </Route>
                  </Switch>
                </Router>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </MuiThemeProvider >
  );
}

export default App;

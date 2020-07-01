import React from 'react';
import SignUp from "./SignUp";
import './App.css';
import { Grid, Paper } from "@material-ui/core";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

function App() {
  return (
    <MuiThemeProvider  >
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
                <img src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <SignUp />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;

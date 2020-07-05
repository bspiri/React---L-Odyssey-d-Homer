import React from 'react';
import { Button, Snackbar, TextField, Grid } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import { Link } from "react-router-dom";
// import SnackBar from "./SnackBar";

class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            passwordbis: '',
            name: "",
            lastname: "",
            flash: "",
            isSnackbarOpen: false,
            SnackbarStatus: ""
        };
    }

    changeHandler = (e) => {
        console.log(e.target.name, e.target.value)
        if (e.target.name === 'email') {
            this.setState({ email: e.target.value });
        } else if (e.target.name === 'password') {
            this.setState({ password: e.target.value });
        } else if (e.target.name === 'name') {
            this.setState({ name: e.target.value });
        } else if (e.target.name === 'lastname') {
            this.setState({ lastname: e.target.value });
        } else if (e.target.name === 'passwordbis') {
            // if (e.target.value !== this.state.password) {
            //     console.log('password does not match')
            // }
            this.setState({ passwordbis: e.target.value });
        }
    }

    handleSubmit = (e) => {
        console.log('A form was submitted: ' + JSON.stringify(this.state, 1, 1));
        e.preventDefault()
        fetch("auth/signup",
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(this.state),
            })
            .then(res => {

                // statusColor diye default olarak success ekleyelim.
                let statusColor = 'success';
                if (res.status === 400) {
                    // http 400 gelmisse error a cevirelim
                    statusColor = 'error';
                }

                // gelen server cevabini (res) json a cevirelim
                res.json().then(resp => {

                    // json a cevirdikten sonra elimizde yukarida tanimladigimiz statusColor olacak.
                    this.setState({ "flash": resp.flash, SnackbarStatus: statusColor, "isSnackbarOpen": true })
                });
            })
    }

    handleClose = () => {
        this.setState({ isSnackbarOpen: false })
    }
    render() {
        return (<div>
            <Link to="/signin">Sign in</Link>
            <h2>Sign up!</h2>
            {this.state.SnackbarStatus}
            <form onSubmit={this.handleSubmit}>
                <Grid container alignItems="center" justify="center" style={{ height: "100%" }}>
                    <Grid item xs={12} style={{ paddingRight: "20px" }} >
                        <TextField onChange={this.changeHandler} style={{ marginBottom: "10px" }}
                            fullWidth label="Email" type="email" name='email' value={this.state.email} />
                    </Grid>
                    <Grid item xs={12} style={{ paddingRight: "20px" }}>
                        <TextField onChange={this.changeHandler} style={{ marginBottom: "10px" }}
                            fullWidth label="Password" type="password" name='password' value={this.state.password} />
                    </Grid>
                    <Grid item xs={12} style={{ paddingRight: "20px" }}>
                        <TextField onChange={this.changeHandler} style={{ marginBottom: "10px" }}
                            fullWidth label="Verify password" type="password" name='passwordbis' value={this.state.passwordbis} />
                    </Grid>
                    <Grid item xs={12} style={{ paddingRight: "20px" }}>
                        <TextField onChange={this.changeHandler} style={{ marginBottom: "10px" }}
                            fullWidth label="Name" type="text" name='name' value={this.state.name} />
                    </Grid>
                    <Grid item xs={12} style={{ paddingRight: "20px" }}>
                        <TextField onChange={this.changeHandler} style={{ marginBottom: "10px" }}
                            fullWidth label="Last name" type="text" name='lastname' value={this.state.lastname} />
                    </Grid>
                    <Grid item xs={12} style={{ paddingRight: "20px" }}>
                        <Link to="/">Sign in</Link>
                        <Button style={{ float: "right" }} variant="contained" color="primary" type="submit" value="Submit">Submit</Button>
                    </Grid>
                </Grid>
            </form>
            <Snackbar open={this.state.isSnackbarOpen} autoHideDuration={3000} onClose={this.handleClose}>
                <Alert onClose={this.handleClose} severity={this.state.SnackbarStatus}>
                    {this.state.flash}
                </Alert>
            </Snackbar>

        </div >)
    }
}
export default SignUp;
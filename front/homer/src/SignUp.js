import React from 'react';

class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            passwordbis: '',
            name: "",
            lastname: "",
            // submit: false
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
        // this.setState({ submit: true });
        e.preventDefault()
        console.log(JSON.stringify(this.state))
    }

    render() {
        return (<div>
            <h1>{this.state.email} {this.state.password} {this.state.passwordbis} {this.state.name} {this.state.lastname} {this.state.submit}</h1>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="email">E-mail Address</label>
                <input onChange={this.changeHandler} type="email" name='email' value={this.state.email} />
                <label htmlFor="password">password</label>
                <input onChange={this.changeHandler} type="password" name='password' value={this.state.password} />
                <label htmlFor="passwordbis">verify password</label>
                <input onChange={this.changeHandler} type="password" name='passwordbis' value={this.state.passwordbis} />
                <label htmlFor="name">name</label>
                <input onChange={this.changeHandler} type="text" name='name' value={this.state.name} />
                <label htmlFor="lastname">last name</label>
                <input onChange={this.changeHandler} type="text" name='lastname' value={this.state.lastname} />
                <input type="submit" value="submit" />
            </form>
        </div>);
    }
}
export default SignUp;
import React, {Component} from 'react';
import { Button, Snackbar, TextField } from '@material-ui/core';


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordBis: "",
      name: "",
      lastname: "",
      flash: "",
      isSnackOpen: false
    }
  }

  updateEmailField = (event) => {
    this.setState({email: event.target.value});
  }  
  updatePasswordField = (event) => {
    this.setState({password: event.target.value});
  }  
  updatePasswordBisField = (event) => {
    this.setState({passwordBis: event.target.value});
  }  
  updateNameField = (event) => {
    this.setState({name: event.target.value});
  }  
  updateLastnameField = (event) => {
    this.setState({lastname: event.target.value});
  }  
  
  handleSubmit = (e) => {
    e.preventDefault();

    fetch("/auth/signup",
    {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(this.state),
    })
    .then(res => res.json())
    .then(
        res => this.setState({"flash": res.flash}),
        err => this.setState({"flash": err.flash})
    )
  }
  handleSnackOpen = () => {
    this.setState((prevState) => ({
      ...prevState,
      isSnackOpen: true
    }))
  }

  handleSnackClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState((prevState) => ({
      ...prevState,
      isSnackOpen: false
    }))
  };
  

  render() {

    const { flash, isSnackOpen } = this.state;
  
    return(
      <div> 
        <h1>{JSON.stringify(this.state, 1, 1)}</h1>
        <form onSubmit={this.handleSubmit}>
        <TextField label="Email" type="email" name="email" onChange={this.updateEmailField} />
           <TextField label="Password" type="password" name="password" onChange={this.updatePasswordField} />
           <TextField label="Re-enter password" type="password" name="passwordBis" onChange={this.updatePasswordBisField} />
           <TextField label="Name" type="name" name="name" onChange={this.updateNameField} />
           <TextField label="Lastname" type="lastname" name="lastname" onChange={this.updateLastnameField} />
           <Button 
             type="submit"
             variant="contained" 
             color="primary"
             onClick={this.handleSnackOpen}
             >Submit
           </Button>
           <Snackbar
           anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
           open={isSnackOpen}
           autoHideDuration={5000}
           onClose={this.handleSnackClose}
           message={flash}
         />
        </form>
      </div>
    );
  }
}

export default SignUp;
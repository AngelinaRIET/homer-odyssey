import React, {Component} from 'react';

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
  

  render() {
  
    return(
      <> 
        <h1>{JSON.stringify(this.state, 1, 1)}</h1>
        <form onSubmit={this.handleSubmit}>
          <label> Email:</label>
            <input type="email" name="email" onChange={this.updateEmailField} />
          <label> Password: </label>
            <input type="password" name="password" onChange={this.updatePasswordField} />
          <label> Password confirmation: </label>
            <input type="password" name="passwordBis" onChange={this.updatePasswordBisField} />
          <label> Name: </label>
            <input type="name" name="name" onChange={this.updateNameField} />
          <label> Lastname: </label>          
            <input type="lastname" name="lastname" onChange={this.updateLastnameField} />
            <input type="submit" value="Submit"/>
        </form>
      </>
    );
  }
}

export default SignUp;
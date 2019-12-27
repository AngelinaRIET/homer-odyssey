import React, {Component} from 'react';

 class SignUp extends Component {
   constructor(props) {
     super(props);
     this.state = {
      email: "mon@email.com",
      password: "monPassw0rd",
      passwordBis: "monPassw0rd",
      name: "James",
      lastname: "Bond"
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
    console.log("A name was submitted: ", this.state)
  }

   render() {
     return(
       <> 
         <h1>{JSON.stringify(this.state, 1, 1)}</h1>
         <form onSubmit={this.handleSubmit}>
           <input type="email" name="email" onChange={this.updateEmailField} />
           <input type="password" name="password" onChange={this.updatePasswordField} />
           <input type="password" name="passwordBis" onChange={this.updatePasswordBisField} />
           <input type="name" name="name" onChange={this.updateNameField} />
           <input type="lastname" name="lastname" onChange={this.updateLastnameField} />
           <input type="submit" value="Submit"/>
         </form>
       </>
     );
   }
 }

 export default SignUp; 
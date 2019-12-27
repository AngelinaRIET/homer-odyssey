import React, {Component} from 'react';

 class SignUp extends Component {
   constructor(props) {
     super(props);
     this.state = {
       email: "",
     }
   }

   updateEmailField = (event) => {
     this.setState({email: event.target.value});
   }  

   render() {
     const { email } = this.state;
     return(
       <> 
         <h1>{email}</h1>
         <input type="email" name="email" onChange={this.updateEmailField} />
       </>
     );
   }
 }

 export default SignUp; 
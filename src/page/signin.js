import React, { Component } from "react";
import axios from 'axios';
import {withRouter} from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";
// import { connect } from "tls";

import {connect} from 'unistore/react';
import {actions} from './../store.js'


class SignIn extends Component {
    // state = {username:"", password:""};
    // changeInput = e =>{
    //     this.setState({[e.target.name]: e.target.value});
    // };
    postSignin = () =>{
        this.props.postLogin()
            .then(() =>{
                console.log('this',this);
                this.props.history.replace('/')
            })
    };
  render() {console.log('signin props', this.props);
    return (
      <section className="content signin">
        <form onSubmit={e => e.preventDefault()}>
            <h4>Sign In</h4>
            <div>
                <input type="text" name="username" placeholder="Username" onChange={e => this.props.setField(e)}/>
            </div>
            <div>
                <input type="password" name="password" placeholder="Password" onChange={e => this.props.setField(e)}/>
            </div>
            <button onClick={() =>this.postSignin()}>Sign In</button>
            <button type="reset">Reset</button>
        </form>
      </section>
    );
  }
}

// class SignIn extends Component {
//     state = {username:"", password:""};
//     changeInput = e =>{
//         this.setState({[e.target.name]: e.target.value});
//     };
//     postLogin = () =>{
//         const {username, password} = this.state;
//         const data={
//             username: username,
//             password: password
//         };
//         const self = this;
//         axios
//             // .post('https://atareact.free.beeceptor.com/auth', data)
//             .post('https://dindaata.free.beeceptor.com/login', data)
//             .then(function(response){
//                 console.log(response.data);
//                 if (response.data.hasOwnProperty("api_key")){
//                     localStorage.setItem('api_key', response.data.api_key);
//                     localStorage.setItem('is_login', true);
//                     localStorage.setItem('full_name', response.data.full_name);
//                     localStorage.setItem('email', response.data.email);
//                     self.props.history.push('/profiles');
//                 }
//             })
//             .catch(function(error){
//                 console.log(error);
//             });
//     };
//   render() {console.log('state', this.state);
//     return (
//       <section className="content signin">
//         <form onSubmit={e => e.preventDefault()}>
//             <h4>Sign In</h4>
//             <div>
//                 <input type="text" name="username" placeholder="Username" onChange={e => this.changeInput(e)}/>
//             </div>
//             <div>
//                 <input type="password" name="password" placeholder="Password" onChange={e => this.changeInput(e)}/>
//             </div>
//             <button onClick={() =>this.postLogin()}>Sign In</button>
//             <button type="reset">Reset</button>
//         </form>
//       </section>
//     );
//   }
// }

// export default withRouter(SignIn);
export default connect("api_key, email, password, full_name, username, is_login", actions)(withRouter(SignIn))

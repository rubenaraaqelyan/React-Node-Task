class Account {
  static get() {
    try {
      return JSON.parse(localStorage.getItem('account')) || {};
    } catch (e) {
      return {};
    }
  }

  static set(account) {
    localStorage.setItem('account', JSON.stringify(account));
  }

  static getToken() {
    return localStorage.getItem('token');
  }

  static setToken(token, remember) {
    localStorage.setItem('token', token);
  }

  static delete() {
    localStorage.removeItem('account');
    localStorage.removeItem('token');
  }
}

export default Account
//import React, {Component} from 'react';
// import {connect} from "react-redux";
// import _ from 'lodash';
// import {TextField, Grid, Typography, Button} from '@material-ui/core'
// import {loginRequest} from "../store/actions/users";
// import {Redirect} from "react-router-dom";
//
// class Login extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             formData: {},
//             register: false
//         }
//     }
//
//     handlePage = () => {
//         this.setState({
//             register: true
//         })
//     }
//
//     handleChange = (path, value) => {
//         const {formData} = this.state;
//         _.set(formData, path, value);
//         this.setState({formData})
//     }
//
//     handleSubmit = (ev) => {
//         ev.preventDefault();
//         const {formData} = this.state;
//         this.props.loginRequest(formData.email, formData.password);
//     }
//     render() {
//          const {formData, register} = this.state;
//         return (
//             <Grid container justify='center' alignItems='center' direction='column'>
//                 <Typography variant='h2' component='h2' color='primary'>LOG IN</Typography>
//                 <br/>
//                 <form onSubmit={this.handleSubmit}>
//                     <TextField
//                         type="email"
//                         placeholder="email"
//                         value={formData.email || ''}
//                         onChange={(ev) => this.handleChange('email', ev.target.value)}/>
//                     <br/>
//                     <TextField
//                         type="password"
//                         placeholder="password"
//                         value={formData.password || ''}
//                         onChange={(ev) => this.handleChange('password', ev.target.value)}/>
//                     <br/>
//                     <Button variant="contained" color="primary" type="submit" size='large' fullWidth>Sign in</Button>
//                     <br/>
//                     <Button variant="contained" color="secondary" onClick={this.handlePage} size='small' fullWidth>Registration</Button>
//                 </form>
//                 {register && <Redirect to='/register'/>}
//             </Grid>
//         );
//     }
// }
//
// const mapStateToProps = (state) => ({
//     token: state.users.token,
//     user: state.users.user
// });
// const mapDispatchToProps = {
//     loginRequest,
// }
// const ContainerC = connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(Login)
//
// export default ContainerC;


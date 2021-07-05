import React, { Component } from 'react';
import { connect } from "react-redux";
import _ from 'lodash';

import {registerRequest} from "../store/actions/users";
import {Button, Grid, TextField, Typography} from "@material-ui/core";
import {Redirect} from "react-router-dom";


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {},
      login: false
    }
  }

  handlePage = () => {
    this.setState({
      login: true
    })
  }

  handleChange = (path, value) => {
    const { formData } = this.state;
    _.set(formData, path, value);
    this.setState({ formData })
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { formData } = this.state;
    this.props.registerRequest(formData)
    this.setState({
      formData: {}
    })
  }

  render() {
    const { formData, login } = this.state;
    return (
        <Grid container justify='center' alignItems='center' direction='column'>
          <Typography variant="h2" color='primary'>Registration</Typography>
          <form onSubmit={this.handleSubmit}>
            <TextField
              type="text"
              placeholder="Full Name"
              value={formData.fullName || ''}
              onChange={(ev) => this.handleChange('fullName', ev.target.value)}/>
            <br/>
            <TextField
              type="email"
              placeholder="email"
              value={formData.email || ''}
              onChange={(ev) => this.handleChange('email', ev.target.value)}/>
            <br/>
            <TextField
              type="password"
              placeholder="password"
              value={formData.password || ''}
              onChange={(ev) => this.handleChange('password', ev.target.value)}/>
            <br/>
            <Button variant="contained" color="primary" type="submit" fullWidth>Registration</Button>
            <br/>
            <Button variant="contained" color="secondary" onClick={this.handlePage} fullWidth>Log In</Button>
          </form>
          { login && <Redirect to='/' /> }
        </Grid>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  registerRequest,
}
const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register)

export default Container;

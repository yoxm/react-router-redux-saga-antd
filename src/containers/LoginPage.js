import React, { Component } from 'react';
import { Form } from 'antd';
import { Login } from '../components';
import { connect } from 'react-redux';
import { push, goBack } from 'react-router-redux';
import { postLoginRequest } from '../actions/user';

class LoginPage extends Component {
  onSubmit = values => {
    this.props.PostLogin({
      userName: values.userName,
      password: values.password,
    });
  };
  render() {
    const LoginForm = Form.create()(Login);
    return <LoginForm onSubmit={this.onSubmit} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    PostLogin: payload => {
      dispatch(postLoginRequest(payload));
    },
    navigateTo: location => {
      dispatch(push(location));
    },
    goBack: () => {
      dispatch(goBack());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

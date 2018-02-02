import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import { login } from 'actions/auth/auth';
import { enterToAppScreenTabs } from 'root';
import { authSelector } from 'selectors';

import { PreLoaderIndicator } from 'components/tools';
import AuthComponent from 'components/auth/AuthComponent';

class LoginScreenContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {};

    this.loginToApp = this.loginToApp.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.authStatus.isEntered) {
      enterToAppScreenTabs();
    }
  }

  render() {
    console.log(this.props);
    const { authStatus } = this.props;
    return (
      <View style={{flex: 1}}>
        {authStatus.isFetching && <PreLoaderIndicator />}
        <AuthComponent
          login={this.loginToApp}
          authStatus={authStatus}
        />
      </View>
    );
  }

  loginToApp(values) {
    const { dispatch } = this.props;

    if (values) {
      if (values.email && values.password) {
        dispatch(login(values));
      }
    }
  }
}

LoginScreenContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
  authStatus: PropTypes.object.isRequired,
};

export default connect(authSelector, dispatch => ({ dispatch }))(LoginScreenContainer);
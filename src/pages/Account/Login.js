import React, { Component } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import Login from '@/components/Login';
import Link from 'umi/link';
import styles from './Login.less';

const { Password, Submit, UserName } = Login;

@connect(({ login, loading }) => ({
  login,
  submitting: loading.effects['login/login'],
}))
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'mobile',
    };
  }

  componentWillMount() {
    this.onGetImageCaptcha();
  }

  onGetImageCaptcha = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'login/getImageCaptcha',
    });
  };

  handleSubmit = (err, values) => {
    if (!err) {
      const { dispatch } = this.props;
      dispatch({
        type: 'login/login',
        payload: {
          ...values,
        },
      });
    }
  };

  render() {
    const { submitting } = this.props;
    const { type } = this.state;
    return (
      <div className={styles.main}>
        <Login
          defaultActiveKey={type}
          onTabChange={this.onTabChange}
          onSubmit={this.handleSubmit}
          ref={loginForm => {
            this.loginForm = loginForm;
          }}>
            <UserName name='username' placeholder={formatMessage({ id: 'app.login.message.username' })} />
            <Password
              name='password'
              placeholder={formatMessage({ id: 'app.login.message.password' })}
              onPressEnter={() => this.loginForm.validateFields(this.handleSubmit)} />
          <Submit loading={submitting}>
            <FormattedMessage id='app.login.login' />
          </Submit>
        </Login>
      </div>
    );
  }
}

export default LoginPage;

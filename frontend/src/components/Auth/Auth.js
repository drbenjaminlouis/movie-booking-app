import React from 'react';
import AuthForm from './AuthForm';
import { sendUserAuthRequest } from '../../API-Helpers/api-helpers';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store';

const Auth = () => {
  const dispatch = useDispatch();

  const handleUserLogin = (data) => {
    console.log('User login or signup:', data);
    sendUserAuthRequest(data.inputs, data.signup)
      .then((response) => {
        console.log(response);
        dispatch(userActions.login());
        localStorage.setItem('userId', response.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <AuthForm onSubmit={handleUserLogin} isAdmin={false} allowSignup={true} />
    </div>
  );
};

export default Auth;

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AuthViewsForm } from './AuthViewsForm';
import { useResetPasswordMutation } from './AuthApi';
import { PasswordField } from '../../ui/passwordField';

export const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const navigate = useNavigate();

  const queryParameters = new URLSearchParams(window.location.search);
  const resetPasswordToken = queryParameters.get('reset_password_token') || '';

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await toast
      .promise(
        resetPassword({ password, resetPasswordToken }).unwrap(),
        {
          pending: 'Resetting password...',
          success: 'Password Changed! Please sign in.',
          error: 'There was an error resetting your password.',
        },
        {
          toastId: 'reset-password',
        }
      )
      .then(() => {
        navigate('/sign_in');
      })
      .catch(() => {
        // do nothing
      });
  };
  return (
    <AuthViewsForm title='Reset your Password!' onSubmit={handleSubmit}>
      <PasswordField
        id='password'
        placeholder='Password'
        required
        onChange={(e) => setPassword(e.target.value)}
        fullRound={true}
      />
      <button
        className={'s4-btn'}
        type='submit'
        disabled={isLoading || !password}
      >
        {isLoading ? 'Resetting Password...' : 'Reset Password'}
      </button>
    </AuthViewsForm>
  );
};

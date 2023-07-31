import React from 'react';
import { useAppDispatch } from '../../store/store';
import { useLogoutMutation } from './AuthApi';
import { unsetUser } from './UserSlice';

export const LogOutButton = () => {
  const dispatch = useAppDispatch();
  const [logout] = useLogoutMutation();

  const handleLogout = () => {
    void logout().unwrap;
    dispatch(unsetUser());
  };

  return (
    <button type='button' className='s4-btn' onClick={handleLogout}>
      Sign Out
    </button>
  );
};

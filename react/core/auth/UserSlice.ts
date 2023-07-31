import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/User';
import { toast } from 'react-toastify';

type UserState = Pick<User, 'id' | 'email' | 'jwtToken' | 'isLoggedIn'>;

const initialState: UserState = {
  id: undefined,
  email: undefined,
  jwtToken: localStorage.getItem('jwtToken') || undefined,
  isLoggedIn: !!localStorage.getItem('jwtToken'),
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id || state.id;
      state.email = action.payload.email || state.email;
      state.jwtToken = action.payload.jwtToken || state.jwtToken;
      state.isLoggedIn = true || state.isLoggedIn;
      if (action.payload.jwtToken) {
        localStorage.setItem('jwtToken', action.payload.jwtToken);
      } else {
        localStorage.removeItem('jwtToken');
      }
    },

    unsetUser: (state, _action: PayloadAction<void>) => {
      state.id = undefined;
      state.email = undefined;
      state.jwtToken = undefined;
      state.isLoggedIn = false;
      localStorage.removeItem('jwtToken');
      toast.info('You are now signed out', {
        toastId: 'logout',
      });
    },
  },
});

export const { setUser, unsetUser } = UserSlice.actions;
export const userReducer = UserSlice.reducer;

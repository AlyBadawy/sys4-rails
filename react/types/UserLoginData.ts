import { User } from './User';

export type UserLoginData = Pick<User, 'email' | 'password'> & {
  resetPasswordToken?: string;
};

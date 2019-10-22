import { UserActionsTypes } from './user.types';

export const setCurrentUser = user => {
  return {
    type: UserActionsTypes.SET_CURRENT_USER,
    payload: user
  };
};
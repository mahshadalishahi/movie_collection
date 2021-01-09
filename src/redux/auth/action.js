import {AUTH} from '../types';

export const setAuth = (auth) => {
  return (dispatch) => {
    dispatch({
      type: AUTH,
      data: auth,
    });
  };
};

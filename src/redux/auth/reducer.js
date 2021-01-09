import {AUTH} from '../types';

const initState = {
  token: null,
};

export default function (state = initState, action) {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        token: action.data,
      };
    default:
      return state;
  }
}

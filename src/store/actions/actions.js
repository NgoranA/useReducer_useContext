import * as ACTIONTYPES from './action_type';

export const increment = () => {
  return {
    type: ACTIONTYPES.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: ACTIONTYPES.DECREMENT,
  };
};
export const multiplyByValue = (data) => {
  return {
    type: ACTIONTYPES.MULTIPLY_BY_VALUE,
    payload: data,
  };
};
export const changeUsername = (data) => {
  return {
    type: ACTIONTYPES.CHANGE_USERNAME,
    payload: data,
  };
};

import * as ACTIONTYPES from '../actions/action_type';

export const initialState = {
  count: 0,
  username: '',
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONTYPES.INCREMENT: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case ACTIONTYPES.DECREMENT: {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    case ACTIONTYPES.MULTIPLY_BY_VALUE: {
      return {
        ...state,
        count: state.count * action.payload,
      };
    }
    case ACTIONTYPES.CHANGE_USERNAME: {
      return {
        ...state,
        username: action.payload,
      };
    }
  }
  throw new Error('Type unknown');
}

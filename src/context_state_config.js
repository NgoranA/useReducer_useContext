import React, { useReducer } from 'react';
import * as ACTIONS from './store/actions/actions';
import * as CounterReducer from './store/reducers/counter_reducer';
import Context from './store/utils/context';

import App from './App';

const ContextState = () => {
  const [state, dispatch] = useReducer(
    CounterReducer.reducer,
    CounterReducer.initialState
  );

  const handleInc = () => {
    dispatch(ACTIONS.increment());
  };
  const handleDec = () => {
    dispatch(ACTIONS.decrement());
  };

  const handleMult = (data) => {
    dispatch(ACTIONS.multiplyByValue(data));
  };

  const handleOnChange = (data) => {
    dispatch(ACTIONS.changeUsername(data));
  };

  return (
    <Context.Provider
      value={{
        count: state.count,
        username: state.username,
        handleInc: () => handleInc(),
        handleDec: () => handleDec(),
        handleMult: (data) => handleMult(data),
        handleOnChange: (data) => handleOnChange(data),
      }}
    >
      <App />
    </Context.Provider>
  );
};

export default ContextState;

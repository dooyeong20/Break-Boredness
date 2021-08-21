import React, { createContext, useContext, useReducer, useState } from 'react';

const BreakBorednessContext = createContext();

const initialState = {
  category: 'random',
  mode: 'light',
  isLoading: false,
  result: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CATEGORY':
      return {
        ...state,
        category: action.category,
      };
    case 'ISLOADING':
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case 'RESULT':
      return {
        ...state,
        result: action.result,
        isLoading: false,
      };
    case 'RESET':
      return {
        ...state,
        result: null,
        isLoading: false,
      };
    case 'MODE':
      return {
        ...state,
        mode: state.mode === 'light' ? 'dark' : 'light',
      };
    default:
      throw new Error('Unhandled action.type !');
  }
};

export const BreakBorednessContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return (
    <BreakBorednessContext.Provider value={value}>
      {children}
    </BreakBorednessContext.Provider>
  );
};

export const useBreakBorednessContext = () => {
  const context = useContext(BreakBorednessContext);

  if (!context) {
    throw new Error(
      'useAppContext() must used with BreakBorednessContext.Provider !'
    );
  }

  return context;
};

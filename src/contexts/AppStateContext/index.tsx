import React, {createContext, useState} from 'react';
import {AppStateContextType} from './types';
import {ProviderType} from '../types';
import {
  AppStateStateDefault as defState,
  AppStateSetStateDefault as defSetState,
} from './defaultData';

const AppStateContext = createContext<AppStateContextType>({
  state: defState,
  setState: defSetState,
});

export const AppStateContextProvider: ProviderType = ({children}) => {
  const [isAutoLoginError, setAutoLoginError] = useState(
    defState.isAutoLoginError,
  );

  return (
    <AppStateContext.Provider
      value={{
        state: {
          isAutoLoginError,
        },
        setState: {
          setAutoLoginError,
        },
      }}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateContext;

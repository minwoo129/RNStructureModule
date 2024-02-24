import React from 'react';
import {ContextProviderType} from './types';

const ContextProvider: ContextProviderType = ({contexts, children}) =>
  contexts.reduce(
    (prev, context) => React.createElement(context, {children: prev}),
    children,
  );

export {AppStateContextProvider} from './AppStateContext';
export default ContextProvider;

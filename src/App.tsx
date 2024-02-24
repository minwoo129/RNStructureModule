/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './redux/store';
import ContextProvider, {AppStateContextProvider} from './contexts';
import AppTest from './rootPages/AppTest';
import AppMain from './rootPages/AppMain';

function App(): JSX.Element {
  const [devForm, setDevForm] = useState(true);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <Provider store={store}>
          <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
          <ContextProvider contexts={[AppStateContextProvider]}>
            {__DEV__ && devForm ? (
              <AppTest setDevForm={setDevForm} />
            ) : (
              <AppMain />
            )}
          </ContextProvider>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;

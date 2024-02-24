import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  AuthStackNavigatorProps,
  AuthStackPageParams,
  AuthStackPages,
} from './types';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screen/auth/login/Login';
import Join from '../screen/auth/join/Join';

const Stack = createStackNavigator<AuthStackPageParams>();
const AuthStackNavigator: FC<AuthStackNavigatorProps> = ({}) => {
  const initialRouteName: AuthStackPages = 'Login';
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Join" component={Join} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default React.memo(AuthStackNavigator);

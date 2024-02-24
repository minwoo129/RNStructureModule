import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  RootStackNavigatorProps,
  RootStackPageParams,
  RootStackPages,
} from './types';
import {createStackNavigator} from '@react-navigation/stack';
import MainStackNavigator from './MainStackNavigator';
import AuthStackNavigator from './AuthStackNavigator';

const Stack = createStackNavigator<RootStackPageParams>();
const RootStackNavigator: FC<RootStackNavigatorProps> = ({}) => {
  const initialRouteName: RootStackPages = 'MainStackNavigator';
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MainStackNavigator" component={MainStackNavigator} />
      <Stack.Screen name="AuthStackNavigator" component={AuthStackNavigator} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default React.memo(RootStackNavigator);

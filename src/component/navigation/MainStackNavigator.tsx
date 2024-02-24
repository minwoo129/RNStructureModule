import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  MainStackNavigatorProps,
  MainStackPageParams,
  MainStackPages,
} from './types';
import {createStackNavigator} from '@react-navigation/stack';
import MainTabNavigator from './MainTabNavigator';
import MainStackPage1 from '../screen/mainStackPage1/MainStackPage1';
import MainStackPage2 from '../screen/mainStackPage2/MainStackPage2';

const Stack = createStackNavigator<MainStackPageParams>();

const MainStackNavigator: FC<MainStackNavigatorProps> = ({}) => {
  const initialRouteName: MainStackPages = 'MainTabNavigator';
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />

      <Stack.Screen name="MainStackPage1" component={MainStackPage1} />

      <Stack.Screen name="MainStackPage2" component={MainStackPage2} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default React.memo(MainStackNavigator);

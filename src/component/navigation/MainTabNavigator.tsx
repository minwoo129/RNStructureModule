import React, {FC} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';
import {MainTabNavigatorProps, MainTabPageParams, MainTabPages} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabPage1Container from '../container/TabPage1Container';
import TabBarIcon from './components/TabBarIcon';

const Tab = createBottomTabNavigator<MainTabPageParams>();

const MainTabNavigator: FC<MainTabNavigatorProps> = ({}) => {
  const initialRouteName: MainTabPages = 'TabPage1Container';
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Tab.Navigator
        initialRouteName={initialRouteName}
        backBehavior="none"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            width: '100%',
            height: 90,
          },
          tabBarIconStyle: {
            flex: 1,
          },
          tabBarHideOnKeyboard: true,
        }}>
        <Tab.Screen
          name="TabPage1Container"
          component={TabPage1Container}
          options={{
            tabBarLabel: 'Tab1',
            tabBarIcon: ({focused}) => {
              return (
                <TabBarIcon focused={focused} pageName="TabPage1Container" />
              );
            },
          }}
        />
        <Tab.Screen
          name="TabPage2Container"
          component={TabPage1Container}
          options={{
            tabBarLabel: 'Tab2',
            tabBarIcon: ({focused}) => {
              return (
                <TabBarIcon focused={focused} pageName="TabPage2Container" />
              );
            },
          }}
        />
        <Tab.Screen
          name="TabPage3Container"
          component={TabPage1Container}
          options={{
            tabBarLabel: 'Tab3',
            tabBarIcon: ({focused}) => {
              return (
                <TabBarIcon focused={focused} pageName="TabPage3Container" />
              );
            },
          }}
        />
        <Tab.Screen
          name="TabPage4Container"
          component={TabPage1Container}
          options={{
            tabBarLabel: 'Tab4',
            tabBarIcon: ({focused}) => {
              return (
                <TabBarIcon focused={focused} pageName="TabPage4Container" />
              );
            },
          }}
        />
      </Tab.Navigator>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default React.memo(MainTabNavigator);

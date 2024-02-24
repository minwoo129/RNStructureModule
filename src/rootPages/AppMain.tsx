import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {AppMainProps} from './types';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from '../component/navigation/RootStackNavigator';

const AppMain: FC<AppMainProps> = ({}) => {
  return (
    <>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default React.memo(AppMain);

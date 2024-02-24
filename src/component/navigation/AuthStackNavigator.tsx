import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {AuthStackNavigatorProps} from './types';

const AuthStackNavigator: FC<AuthStackNavigatorProps> = ({}) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {},
});

export default React.memo(AuthStackNavigator);

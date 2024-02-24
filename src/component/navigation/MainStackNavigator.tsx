import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {MainStackNavigatorProps} from './types';

const MainStackNavigator: FC<MainStackNavigatorProps> = ({}) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {},
});

export default React.memo(MainStackNavigator);

import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {RootStackNavigatorProps} from './types';

const RootStackNavigator: FC<RootStackNavigatorProps> = ({}) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {},
});

export default React.memo(RootStackNavigator);

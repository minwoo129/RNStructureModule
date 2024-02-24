import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TabBarIconProps} from './types';

const TabBarIcon: FC<TabBarIconProps> = ({focused, pageName}) => {
  const color = focused ? 'blue' : 'black';
  return (
    <View style={styles.container}>
      <Text style={{color}}>{pageName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(TabBarIcon);

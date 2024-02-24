import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const TabPage4 = ({navigation, route}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>TabPage4</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(TabPage4);

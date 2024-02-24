import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const TabPage1 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>TabPage2</Text>
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

export default React.memo(TabPage1);

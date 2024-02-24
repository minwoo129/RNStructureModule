import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const MainStackPage1 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>MainStackPage1</Text>
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

export default React.memo(MainStackPage1);

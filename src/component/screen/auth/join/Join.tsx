import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const Join = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Join</Text>
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

export default React.memo(Join);

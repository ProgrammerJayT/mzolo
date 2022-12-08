/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home screen</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

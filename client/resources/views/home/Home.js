/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={toggleDrawer}>
          <Text>Toggle</Text>
        </TouchableOpacity>

        <Text>Home</Text>

        <TouchableOpacity>
          <Text>Image</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
});

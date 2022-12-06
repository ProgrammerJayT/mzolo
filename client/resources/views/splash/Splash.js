/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, SafeAreaView, Image, View} from 'react-native';
import React from 'react';

const Splash = ({navigation}) => {
  //Navigate to Home screen after 3 seconds
  setTimeout(() => {
    navigation.navigate('Home');
  }, 2000);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={{fontSize: 50, textAlign: 'center'}}>
          Mzolo version 3 coming soon
        </Text>
      </View>
      <Image
        style={styles.hawk_logo}
        source={require('../../assets/images/hawk.png')}
      />
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  hawk_logo: {
    width: 100,
    height: 70,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});

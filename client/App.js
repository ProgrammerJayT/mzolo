/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import RouteStack from './routes/RouteStack';
import 'react-native-gesture-handler';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RouteStack />

      <StatusBar backgroundColor={'#329dd2'} />
    </SafeAreaView>
  );
}

export default App;

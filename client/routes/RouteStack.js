/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../resources/views/splash/Splash';
import Home from '../resources/views/home/Home';
import DrawerStack from './DrawerStack';

const Stack = createNativeStackNavigator();

const RouteStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Drawer" component={DrawerStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteStack;

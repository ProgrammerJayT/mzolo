/* eslint-disable prettier/prettier */
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../resources/views/home/Home';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;

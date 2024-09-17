import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppDev from '../screens/AppDev';
import WebDev from '../screens/WebDev';
import Services from '../screens/Services';

const Drawer = createDrawerNavigator();

export default function ServicesDrawerNavigator() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Our Services" component={Services} />
      <Drawer.Screen name="Web Development" component={WebDev} />
      <Drawer.Screen name="App Development" component={AppDev} />
    </Drawer.Navigator>
  );
}

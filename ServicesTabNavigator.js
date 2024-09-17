import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WebDev from '../screens/WebDev';
import AppDev from '../screens/AppDev';

const Tab = createBottomTabNavigator();

export default function ServicesTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="WebDev" component={WebDev} />
      <Tab.Screen name="AppDev" component={AppDev} />
    </Tab.Navigator>
  );
}

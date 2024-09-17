import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import About from '../screens/About';
import Icon from 'react-native-vector-icons/Ionicons'

import ServicesDrawerNavigator from './ServicesDrawerNavigator'; 

const Tab = createBottomTabNavigator();
const getTabBarIcon = (routeName, focused, color, size) => {
  let iconName;
  if (routeName == 'Home') {
    iconName = focused ? "home" : "home-outline"
  }
  else if (routeName == 'Services') {
    iconName = focused ? "construct" : "construct-outline"
  }
  else if (routeName == 'About') {
    iconName = focused ? "book" : "book-outline"

  }
  return <Icon name={iconName} size={size} color={color} />
}
export default function MainTabNavigator() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => (
      {
        tabBarIcon: ({ focused, color, size }) => getTabBarIcon(route.name, focused, color, size),
        tabBarActiveTintColor: 'darkblue',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          paddingBottom: 5,
          height: 60
        },
        tabBarLabelStyle: {
          fontWeight: '700',
          fontSize: 13
        },
        
      }
    )}>
      <Tab.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Tab.Screen name="About" component={About} options={{headerShown:false}} />
      <Tab.Screen name="Services" component={ServicesDrawerNavigator} options={{headerShown:false}} />
    </Tab.Navigator>
  );
}

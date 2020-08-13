import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Mall from './Mall';
import CarPark from './CarPark';

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ iconName, color, size }) => {

            if (route.name === 'Mall') {
              iconName = 'ios-home';
            } else if (route.name === 'CarPark') {
              iconName = 'ios-car';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Mall" component={Mall} />
        <Tab.Screen name="CarPark" component={CarPark} />
      </Tab.Navigator>
  );
}
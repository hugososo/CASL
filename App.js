import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Mall from './src/Mall';
import CarPark from './src/CarPark';
import Drawer from './src/DrawerNav';

export default function App() {
  return (
    <Drawer />
  );
}
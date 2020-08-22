import * as React from 'react';
import { Button, View,Text} from 'react-native';
import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './Profile';
import Setting from './Setting';
import Tab from './TabNav';
import QRScanner from './QRScanner';
import AccountInfo from './AccountInfo';
import CarPark from './CarPark';
import Login from './Login';
import SignUp from './SignUp';
import {Header, Left,Body, Right, Icon} from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';


const Drawer = createDrawerNavigator();

export default function DrawerNav() {

  const Stack = createStackNavigator();

  function Root() {
    return (
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="AccountInfo" component={AccountInfo} />
        <Stack.Screen name="CarPark" component={CarPark} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Tab} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Setting" component={Root} />
        <Drawer.Screen name="QR Scanner" component={QRScanner} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Sign Up" component={SignUp} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
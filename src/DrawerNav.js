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
import {Header, Left,Body, Right, Icon} from 'native-base';


const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Tab} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Setting" component={Setting} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
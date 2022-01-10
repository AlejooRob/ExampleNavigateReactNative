import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const LateralMenuBasic = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'left',
        drawerType: width >= 640 ? 'permanent' : 'front'
      }}
    >
      <Drawer.Screen name="StackNavigator" options={{ title: 'Home'}} component={ StackNavigator } />
      <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings'}} component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}
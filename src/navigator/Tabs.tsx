import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigator } from './StackNavigator';
import { colors } from '../themes/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';

export const Tabs = () => {

  //Render Ios or Android
  return Platform.OS === 'ios'
          ? <TabsIOS />
          : <TabsAndroid />
}

// Android
const  BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={ true }
      barStyle= {{
        backgroundColor: colors.primary
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({ color, focused }) => {

          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'bookmark-outline'
              break;
            case 'Tab2Screen':
              iconName = 'library-outline'
              break;
            case 'StackNavigator':
              iconName = 'newspaper-outline'
              break;
          }

          return <Icon name={ iconName } size={20} color={ color } />
        }
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{title: 'Tab2'}} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{title: 'Stack'}} component={ StackNavigator } />
    </BottomTabAndroid.Navigator>
  );
}


// IOS
const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarIcon: ({ color, focused, size }) => {

          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'bookmark-outline'
              break;
            case 'Tab2Screen':
              iconName = 'library-outline'
              break;
            case 'StackNavigator':
              iconName = 'newspaper-outline'
              break;
          }

          return <Icon name={ iconName } size={20} color={ color } />
        }
      })}
    >
      <BottomTabIOS.Screen name="Tab1Screen" options={{title: 'Icons'}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{title: 'Tab2'}} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{title: 'Stack'}} component={ StackNavigator } />
    </BottomTabIOS.Navigator>
  );
}
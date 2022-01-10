import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactScreen from '../screens/ContactScreen';
import AlbumScreen from '../screens/AlbumScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../themes/appTheme';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const { top } = useSafeAreaInsets();
  return (
    <Tab.Navigator
        style={{
            paddingTop: top
        }}
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        screenOptions={ ({route}) => ({
            tabBarActiveTintColor: colors.primary,
            tabBarPressColor: colors.primary,
            tabBarShowIcon: true,
            tabBarIndicatorStyle: {
                backgroundColor: colors.primary
            },
            tabBarStyle: {
                elevation: 0,
                shadowColor: 'transparent'
            },
            tabBarIcon: ({color}) => {
                let iconName: string = '';
                switch (route.name) {
                    case 'Chat':
                    iconName = 'chatbubble-ellipses-outline';
                    break;
        
                    case 'Contact':
                    iconName = 'person-add-outline';
                    break;
        
                    case 'Album':
                    iconName = 'albums-outline';
                    break;
                }
                return <Icon name={ iconName } size={20} color={ color } />
            },
        })}
    >
      <Tab.Screen name="Chat" component={ ChatScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Album" component={AlbumScreen} />
    </Tab.Navigator>
  );
}
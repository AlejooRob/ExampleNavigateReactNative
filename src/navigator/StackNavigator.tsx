import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Page1Screen } from '../screens/Page1Screen';
import { Page2Screen } from '../screens/Page2Screen';
import { Page3Screen } from '../screens/Page3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';

export type RootStackParams = {
  Page1Screen: undefined,
  Page2Screen: undefined,
  Page3Screen: undefined,
  PagePersona: {id:number,nombre: string}
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Page2Screen"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="Page1Screen" options={{ title: "Página 1"}} component={Page1Screen} />
      <Stack.Screen name="Page2Screen" options={{ title: "Página 2"}} component={Page2Screen} />
      <Stack.Screen name="Page3Screen" options={{ title: "Página 3"}} component={Page3Screen} />
      <Stack.Screen name="PagePersona" options={{ title: "Página Persona"}} component={PersonaScreen} />
    </Stack.Navigator>
  );
}
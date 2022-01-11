import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import { StackNavigator } from './src/navigator/StackNavigator'
// import { LateralMenuBasic } from './src/navigator/LateralMenuBasic';
import { LateralMenu } from './src/navigator/LateralMenu';
import { AuthProvider } from './src/context/AuthContext';
// import { Tabs } from './src/navigator/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <Appstate>
        {/* <StackNavigator /> */}
        {/* <LateralMenuBasic /> */}
        <LateralMenu />
        {/* <Tabs /> */}
      </Appstate>
    </NavigationContainer>
  )
}

const Appstate = ( {children}: {children: JSX.Element}) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}

export default App;

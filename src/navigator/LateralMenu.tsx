import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
// import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../themes/appTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const LateralMenu = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'left',
        drawerType: width >= 640 ? 'permanent' : 'front'
      }}
      drawerContent={ (props) => <MenuInter {...props}/> }
    >
      <Drawer.Screen name="Tabs"  component={ Tabs } />
      <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}

// Nueva Version
const MenuInterno = (props: DrawerContentComponentProps) => {

  return (
    <DrawerContentScrollView {...props}>
      <View style={ styles.avatarContainer }>
        <Image 
          source={{
            uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F7c%2FProfile_avatar_placeholder_large.png&f=1&nofb=1'
          }}
          style={ styles.avatar }
        />
      </View>
      <DrawerItemList {...props} />
      <View
        
      >
        <DrawerItem label="Help" onPress={() => console.log('Link to help')} />
      </View>
    </DrawerContentScrollView>
    // DrawerContentComponentProps
  );
}


const MenuInter = ( { navigation }: DrawerContentComponentProps) => {

  return (
    <DrawerContentScrollView>

      {/* Parte del avatar */}
      <View style={ styles.avatarContainer }>
        <Image 
          source={{
            uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F7c%2FProfile_avatar_placeholder_large.png&f=1&nofb=1'
          }}
          style={ styles.avatar }
        />
      </View>


      {/* Opciones de menú */}
      <View style={ styles.menuContainer }>

          <TouchableOpacity 
            style={{ 
              ...styles.menuButton,
              flexDirection: 'row'
            }}
            onPress={ () => navigation.navigate('Tabs') }
          >
            <Icon name="compass-outline" size={ 23 } color="black" />
            <Text style={ styles.menuText }>  Navegacion</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={{ 
              ...styles.menuButton,
              flexDirection: 'row'
            }}
            onPress={ () => navigation.navigate('SettingsScreen') }
          >
            <Icon name="cog-outline" size={ 23 } color="black" />
            <Text style={ styles.menuText }>  Ajustes</Text>
          </TouchableOpacity>

      </View>

    </DrawerContentScrollView>
  );
}
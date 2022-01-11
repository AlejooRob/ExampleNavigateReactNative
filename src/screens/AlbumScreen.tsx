import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../themes/appTheme'

const AlbumScreen = () => {

     const { authState, logout } = useContext(AuthContext)
     
    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title}>Album Screen</Text>
            { authState.isLoggedIn && <Button title='Logout' onPress={ logout } /> }    
        </View>
    )
}

export default AlbumScreen

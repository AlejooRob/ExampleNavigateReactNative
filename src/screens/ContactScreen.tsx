import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../themes/appTheme'

const ContactScreen = () => {

    const { authState, signIn } = useContext(AuthContext);


    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title}>Contact Screen</Text>
            { !authState.isLoggedIn && <Button title='Sign In' onPress={ signIn } /> }    
        </View>
    )
}

export default ContactScreen

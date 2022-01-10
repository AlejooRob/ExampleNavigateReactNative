import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { styles } from '../themes/appTheme';

export const Page2Screen = () => {
    
    const navigator = useNavigation();

    useEffect(() => {
        navigator.setOptions({
            title: 'Hola Mundo',
            headerBackTitle: 'Atras'
        })
    }, [])

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title } > Page 2 Screen</Text>
            <Button 
                title='Ir a página 3'
                onPress={ () => navigator.navigate('Page3Screen' as never)}
            />
        </View>
    )
}

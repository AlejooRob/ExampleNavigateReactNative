import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../themes/appTheme';

interface Props extends StackScreenProps<any, any>{};

export const Page3Screen = ({ navigation }: Props) => {
    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title}  > Page 3 Screen</Text>
            <Button 
                title="Regresar"
                onPress={ () => navigation.pop() }
            />
            <Button 
                title="Ir a Página 1"
                onPress={ () => navigation.popToTop() }
            />
        </View>
    )
}
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../themes/appTheme';

interface Props extends StackScreenProps<any, any>{};

export const Page1Screen = ( { navigation }: Props ) => {

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }> Page 1 Screen</Text>
            <Button 
                title="Ir página 2"
                onPress={ () => navigation.navigate('Page2Screen') }
            />
            <Text>Navegar con Argumentos</Text>
            <View style={{ flexDirection: 'row'}}>
                <TouchableOpacity
                    style={{
                        ...styles.bigButton,
                        backgroundColor: '#5856D6'
                    }}
                    onPress={ () => navigation.navigate('PagePersona', {
                        id:1,
                        nombre: 'Pedro'
                    })}
                >
                    <Icon 
                        name="body-outline"
                        color="white"
                        size={ 35 }
                    />
                    <Text style={ styles.textBigButton }>Pedro</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        ...styles.bigButton,
                        backgroundColor: '#FF9427'
                    }}
                    onPress={ () => navigation.navigate('PagePersona', {
                        id:2,
                        nombre: 'Susana'
                    })}
                >
                    <Icon 
                        name="woman-outline"
                        color="white"
                        size={ 35 }
                    />
                    <Text style={ styles.textBigButton }>Susana</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

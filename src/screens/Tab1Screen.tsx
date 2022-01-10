import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { colors, styles } from '../themes/appTheme'
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';



const Tab1Screen = () => {

    const { top } = useSafeAreaInsets();

    useEffect(() => {
        console.log('tab1')
    }, [])
    
    return (
        <View style={ {
            ...styles.globalMargin,
                marginTop: top + 20
            } }>
            <Text style={ styles.title }>Tab1 Screen</Text>
            <Text>
                <Icon name="airplane-outline" size={80} color={ colors.secondary } />
                <Icon name="archive-outline" size={80} color={ colors.secondary } />
                <Icon name="analytics-outline" size={80} color={ colors.secondary } />
                <Icon name="cog-outline" size={80} color={ colors.secondary } />
                <Icon name="finger-print-outline" size={80} color={ colors.secondary } />
                <Icon name="planet-outline" size={80} color={ colors.secondary } />
                <Icon name="today-outline" size={80} color={ colors.secondary } />
                <Icon name="wallet-outline" size={80} color={ colors.secondary } />
                <Icon name="git-pull-request-outline" size={80} color={ colors.secondary } />
                <Icon name="bug-outline" size={80} color={ colors.secondary } />
            </Text>
        </View>
    )
}

export default Tab1Screen

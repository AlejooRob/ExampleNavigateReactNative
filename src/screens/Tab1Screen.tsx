import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { colors, styles } from '../themes/appTheme'
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TouchableIcon from '../components/TouchableIcon';



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
            <Text style={ styles.title }>Iconos</Text>
            <Text>
                <TouchableIcon  iconName="airplane-outline"  />
                <TouchableIcon  iconName="archive-outline" />
                <TouchableIcon  iconName="analytics-outline"  />
                <TouchableIcon  iconName="cog-outline" />
                <TouchableIcon  iconName="finger-print-outline" />
                <TouchableIcon  iconName="planet-outline"  />
                <TouchableIcon  iconName="today-outline" />
                <TouchableIcon  iconName="wallet-outline"  />
                <TouchableIcon  iconName="git-pull-request-outline"/>
                <TouchableIcon  iconName="bug-outline"  />
            </Text>
        </View>
    )
}

export default Tab1Screen

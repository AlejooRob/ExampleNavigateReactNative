import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

const Tab2Screen = () => {

    useEffect(() => {
        console.log('tab1')
    }, [])
    
    return (
        <View>
            <Text>Tab 2 Screen</Text>
        </View>
    )
}

export default Tab2Screen

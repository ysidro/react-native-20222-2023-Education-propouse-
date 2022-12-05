import { View, Text } from 'react-native'
import React from 'react'

export default function BasicComponents() {
    const percentage = '30%'
    const green = 10

    const Component = ({ percentage }) => <Text>{percentage}</Text>

    return (
        <View style={styles.container}>
            <Component percentage="10%" />
            <Component percentage="20%" />
            <Component percentage="40%" />
            <Component percentage="50%" />
            <Component percentage="0%" />
            <Component percentage="60%" />
        </View>
    );

}
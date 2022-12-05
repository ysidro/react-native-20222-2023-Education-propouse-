import React, { useState } from 'react';
import { View, Text, Button,StyleSheet } from 'react-native'


export default function BasicState() {
    const [operations, setOperations] = useState(0)

    const Screen = ({ value }) => {
        return (
            <View>
                <Text>{value}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Screen value={operations} />
            <Button
                title="Press Me"
                onPress={() => setOperations(operations + 1)}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
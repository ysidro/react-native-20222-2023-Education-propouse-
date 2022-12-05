import React from 'react';
import { StyleSheet, View, } from 'react-native';

import CustomComponents from './components/CustomComponents'

export default function App() {
  return (
    <View style={styles.container}>
      <CustomComponents/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



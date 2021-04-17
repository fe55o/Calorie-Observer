import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./screens/Home"
import Contants from 'expo-constants'
import CreateEmployee from "./screens/createEmployee"

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CreateEmployee/> */}
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Contants.statusBarHeight
        // alignItems: 'center',
    // justifyContent: 'center',
  },
});

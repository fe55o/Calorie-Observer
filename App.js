import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./screens/Home"
import Contants from 'expo-constants'
import Register from "./screens/Register"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


function App() {
  return (
    <View style={styles.container}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Register Info" component={Register} />
            {/* <Stack.Screen name="Profile" component={Profile} /> */}
          </Stack.Navigator>

      {/* <CreateEmployee/> */}
      {/* <Home/> */}
    </View>
  );
}

export default ()=>{
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
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

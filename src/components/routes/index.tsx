import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import Home from '../../screens/Home/index'
import Details from '../../screens/ProductDetails/index'

const Stack = createStackNavigator();

const index = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default index
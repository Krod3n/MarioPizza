import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import Home from '../screens/HomeScreen/index';
import SignInScreen from '../screens/SigninScreen/SignInScreen';

const Stack = createNativeStackNavigator();


export default function Navigation()  {
  return (
    <NavigationContainer>
         <Stack.Navigator screenOptions={{headerShown: false}}>
         <Stack.Screen name="SignIn" component={SignInScreen} />
         <Stack.Screen name="SignUp" component={SignUpScreen} />

                  <Stack.Screen name="Home" component={Home} />
         
         </Stack.Navigator>
    </NavigationContainer>
  )
}


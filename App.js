import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Page1 from './components/Page1'
import Page2 from './components/Page2'

const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer> 
        <Stack.Navigator initialRaoteName="PAGE1">
          <Stack.Screen name = "PAGE1" component={Page1}/>
            <Stack.Screen name = "PAGE2" component={Page2}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
} 
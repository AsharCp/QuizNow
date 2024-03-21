// Not using in this project
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Profile from './Profile';
import QuizScreen from './QuizScreen';
import Stat from './Stat';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}} />
        <Stack.Screen name='Quiz' component={QuizScreen} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Settings' component={Stat} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default StackNavigator

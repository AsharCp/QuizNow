import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import QuizScreen from '../screens/QuizScreen';
import Stat from '../screens/Setting';
import { Ionicons } from '@expo/vector-icons';
import Result from '../screens/Result';
import Setting from '../screens/Setting';


const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
        <Tab.Navigator
        screenOptions={({route}) =>({
            headerShown:false,
            tabBarIcon:({focused, color, size})=>{
                let iconName;
                if(route.name === 'Quiz'){
                    iconName = focused?'book':'book-outline';
                }
                else if(route.name === 'Home'){
                    iconName = focused?'home':'home-outline';
                }
                else if(route.name === 'Result'){
                    iconName = focused?'stats-chart':'stats-chart-outline';
                }
                else if(route.name === 'Settings'){
                    iconName = focused?'settings':'settings-outline';
                }
                return <Ionicons name={iconName} size={30}/>
            },
            tabBarOptions:{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            },
            tabBarStyle: { backgroundColor: 'white',
            height:65,paddingBottom: 8,paddingTop: 8,
        }})}>
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='Quiz' component={QuizScreen}/>
            <Tab.Screen name='Result' component={Result}/>
            <Tab.Screen name='Settings' component={Setting}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigator
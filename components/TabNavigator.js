import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import QuizScreen from '../screens/QuizScreen';
import Profile from '../screens/Profile';
import Stat from '../screens/Stat';
import { Ionicons } from '@expo/vector-icons';


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
                else if(route.name === 'Profile'){
                    iconName = focused?'person':'person-outline';
                }
                else if(route.name === 'Stat'){
                    iconName = focused?'settings':'settings-outline';
                }
                return <Ionicons name={iconName} size={30}/>
            },
            tabBarOptions:{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            },
            tabBarStyle: { backgroundColor: 'rgba(34,36,40,1)',
            height:65,paddingBottom: 8,paddingTop: 8,
        }})}>
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='Quiz' component={QuizScreen}/>
            <Tab.Screen name='Profile' component={Profile}/>
            <Tab.Screen name='Stat' component={Stat}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigator
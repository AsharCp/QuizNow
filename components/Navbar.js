// This is a custom designed navigation bar
// This is not used in this project
import React from 'react'
import { View, Text } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';


const Navbar = () => {
  const navigation=useNavigation();
  return (
    
    <View className="w-screen h-max py-5 bg-red-500 flex items-center absolute bottom-0 rounded-t-2xl flex-row justify-around border-solid">
        <MaterialIcons name='home' size={40} onPress={()=>navigation.navigate('Home')}></MaterialIcons>
        <MaterialIcons name='quiz' size={40} onPress={()=>navigation.navigate('Quiz')}></MaterialIcons>
        <AntDesign name='profile' size={40} onPress={()=>navigation.navigate('Profile')}></AntDesign>
        <MaterialIcons name='settings' size={40} onPress={()=>navigation.navigate('Settings')}></MaterialIcons>

    </View>
  )
}

export default Navbar

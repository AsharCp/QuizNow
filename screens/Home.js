import React from 'react'
import { Button, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native'

const Home = ({navigation}) => {

  return (
    <SafeAreaView className="bg-blue-800 h-full w-full flex items-center justify-center">
        <Text className="text-white">Welcome to the Quiz App</Text>
        <Button title='Start Quiz' onPress={()=>navigation.navigate('Quiz')}/>
    </SafeAreaView>
  )
}

export default Home

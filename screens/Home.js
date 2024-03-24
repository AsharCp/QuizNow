import React from 'react'
import { Button, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native'

const Home = ({navigation}) => {
  const initialScore = 0;

  return (
    <SafeAreaView className="bg-red-400 h-full w-full flex items-center justify-center">
        <Text className="text-white">Welcome to the Quiz App</Text>
        <Button title='Start Quiz' onPress={()=>navigation.navigate('Quiz',{data:initialScore})}/>
    </SafeAreaView>
  )
}

export default Home

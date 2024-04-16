import React from 'react'
import { Button, Text, View , Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native'

const Home = ({navigation}) => {
  const initialScore = 0;

  return (
    <SafeAreaView className="bg-white h-full w-full flex items-center justify-center">
      <Text className="text-5xl p-3 font-bold text-blue-500">QuizNow</Text>
      <Image
          source={require('../assets/Home.jpg')} // Change this to the path of your image
          style={{ width: 300, height: 300, marginBottom: 20 }}
        />
        <Text className="text-slate-500 text-xl p-4 font-bold text-center">Welcome to QuizNow.Expand Your Mind, One Question at a Time!</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Quiz',{data:initialScore})}>
          <Text className="text-white font-bold text-2xl py-2 px-10 rounded-2xl text-center bg-blue-500" >Start Quiz</Text>
        </TouchableOpacity>
        {/* <View style={{ width: 150, height: 50 }}>
          <Button title='Start Quiz' onPress={()=>navigation.navigate('Quiz',{data:initialScore})}/>
        </View> */}
        
    </SafeAreaView>
  )
}

export default Home

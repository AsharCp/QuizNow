import React from 'react'
import { Button, TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native'
import { useRoute } from '@react-navigation/native';

const Result = ({navigation}) => {
  const route = useRoute();
  var currentScore = route.params?.data || "Sorry";

  const handleBackToQuiz=()=>{
    navigation.navigate('Quiz')
  }
  return (
    <View className='w-full h-full bg-red-400 flex justify-center items-center'>
         <Text>Congratulations!</Text>
         <Text>Your Score is {currentScore}</Text>
         <TouchableOpacity>
            <Button title='Start Again' onPress={handleBackToQuiz}/>
         </TouchableOpacity>
    </View>
    
  )
}

export default Result
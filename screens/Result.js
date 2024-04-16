import React, { useState , useEffect } from 'react'
import { Button, TouchableOpacity, View , AsyncStorage } from 'react-native'
import { Text } from 'react-native'
import { useRoute } from '@react-navigation/native';

const Result = ({navigation}) => {

  const [highScore,setHighScore] = useState(0)
  const route = useRoute();
  var currentScore = route.params?.data || "Sorry";

  useEffect(() => {
    loadHighScore();
  }, []);
  
  // function to load highscore
  const loadHighScore= async ()=>{
    try{
      const storedScore = AsyncStorage.getItem("Highscore");
      if (storedScore !== null) {
        setHighScore(parseInt(storedScore));
      }
    }catch(error){
      console.log("Error in loading HighScore")
    }

  }
  // Function to save the highScore
  const saveHighScore= async (score)=>{
    try{
      await AsyncStorage.setItem('Highscore',score.toString())
    }catch(error){
      console.log("Error in saving score!")
    }
  }
  // Find the highScore
  if(currentScore>highScore)
  {
    setHighScore(currentScore)
    saveHighScore(currentScore)
  }
  const handleBackToQuiz=()=>{
    navigation.navigate('Quiz')
  }
  return (
    <View className='w-full h-full bg-slate-300 flex justify-center items-center'>
         <Text className="text-2xl font-semibold pb-4 text-blue-500">Previous Quiz Score</Text>
         <Text className="text-8xl text-black font-bold">{currentScore}</Text>
         {currentScore>5?
         <Text className="text-2xl p-2 font-semibold text-blue-500">Congratulations!</Text>
         :""
         }
         <Text className="font-semibold text-2xl text-blue-500">High Score : {highScore}</Text>
         <TouchableOpacity onPress={handleBackToQuiz}>
            <Text className="bg-blue-500 px-5 py-2 m-3 rounded font-bold text-lg text-white">START AGAIN</Text>
         </TouchableOpacity>
    </View>
    
  )
}

export default Result
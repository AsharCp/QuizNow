import React from 'react'
import Options from './Options'
import { View , Text, Button, TouchableOpacity } from 'react-native'
import { useState , useEffect } from 'react'

const Quizcard = () => {

  const [quizData, seQuizData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.80.204:5000/api/quizzes'); // Replace with your server URL
        const data = await response.json();
        console.log(data)
        seQuizData(data);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <View className="w-80 h-max bg-red-400 p-4 rounded-md">
          <Text className="p-4 border rounded bg-white text-center">{quizData[0].question}</Text>
          <View className="flex items-center justify-center flex-col gap-2 p-2">
            <Text className="border py-3 px-16 w-64 rounded-2xl text-center bg-white">{quizData[0].options.op1}</Text>
            <Text className="border py-3 px-16 w-64 rounded-2xl text-center bg-white" >{quizData[0].options.op2}</Text>
            <Text className="border py-3 px-16 w-64 rounded-2xl text-center bg-white">{quizData[0].options.op3}</Text>
            <Text className="border py-3 px-16 w-64 rounded-2xl text-center bg-white">{quizData[0].options.op4}</Text>
        </View>
        <View  className='flex flex-row justify-around items-center p-3'>
          <TouchableOpacity>
            <Text className='bg-red-700 px-6 py-2'>Quit</Text>
          </TouchableOpacity>
          <TouchableOpacity className='flex flex-row justify-around items-center p-3'>
            <Text className='bg-green-700 px-6 py-2'>Next</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default Quizcard

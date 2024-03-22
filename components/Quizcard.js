import React from 'react'
import Options from './Options'
import { View , Text, Button, TouchableOpacity } from 'react-native'

const Quizcard = () => {
  return (
    <View className="w-80 h-max bg-red-400 p-4 rounded-md">
          <Text className="p-4 border rounded bg-white text-center">Who is the chief minister of kerala?</Text>
          <View className="flex items-center justify-center flex-col gap-2 p-2">
            <Text className="border py-3 px-16 w-64 rounded-2xl text-center bg-white">Shashi Tharoor</Text>
            <Text className="border py-3 px-16 w-64 rounded-2xl text-center bg-white" >Pinarayi Vijayan</Text>
            <Text className="border py-3 px-16 w-64 rounded-2xl text-center bg-white">Rahul gandhi</Text>
            <Text className="border py-3 px-16 w-64 rounded-2xl text-center bg-white">Ashar Jaman</Text>
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

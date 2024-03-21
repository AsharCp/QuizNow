import React from 'react'
import Options from './Options'
import { View , Text } from 'react-native'

const Quizcard = () => {
  return (
    <View className="w-max h-max bg-white ">
          <Text className="p-3 ">Who is the chief minister of kerala?</Text>
          <Options/>
    </View>
  )
}

export default Quizcard

import React from 'react'
import Quizcard from '../components/Quizcard'
import { SafeAreaView } from 'react-native'

const QuizScreen = () => {
  return (
    <SafeAreaView className='bg-black h-full w-full flex items-center justify-center'>
        <Quizcard/>
    </SafeAreaView>
  )
}

export default QuizScreen

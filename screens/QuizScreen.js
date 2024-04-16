import React from 'react'
import Quizcard from '../components/Quizcard'
import { SafeAreaView } from 'react-native'

const QuizScreen = ({navigation}) => {

  return (
    <SafeAreaView className='bg-slate-300 h-full w-full flex items-center justify-center'>
        <Quizcard navigation={navigation}/>
    </SafeAreaView>
  )
}

export default QuizScreen

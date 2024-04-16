import React from 'react'
import Options from './Options'
import { View , Text, Button, TouchableOpacity ,TouchableHighlight } from 'react-native'
import { useState , useEffect } from 'react'

const Quizcard = ({navigation}) => {
  const [quizData, seQuizData] = useState([]);
  const [updateQuestion,setUpdateQuestion] = useState(0)
  const [score,setScore] = useState(0)
  const [correct1,setCorrect1] = useState(false)
  const [correct2,setCorrect2] = useState(false)
  const [correct3,setCorrect3] = useState(false)
  const [correct4,setCorrect4] = useState(false)
  const [inCorrect1,setInCorrect1] = useState(false)
  const [inCorrect2,setInCorrect2] = useState(false)
  const [inCorrect3,setInCorrect3] = useState(false)
  const [inCorrect4,setInCorrect4] = useState(false)
  const [optionClick,setOptionClick] = useState(false)
  // console.log(score)

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.67.204:5000/api/quizzes'); // Replace with your server URL
        const data = await response.json();
        // console.log(data)
        seQuizData(data);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };

    fetchData();
  }, []);
  // handleNextQuestion function by index
  const handleNextQuestion=()=>{
    setCorrect1(false)
    setInCorrect1(false)
    setCorrect2(false)
    setInCorrect2(false)
    setCorrect3(false)
    setInCorrect3(false)
    setCorrect4(false)
    setInCorrect4(false)
    if(updateQuestion<quizData.length-1)
    {
      setUpdateQuestion(updateQuestion+1);
    }
    else
    {
      setUpdateQuestion(0)
      navigation.navigate('Result',{data:score});
      setScore(0)
    } 
    setOptionClick(false)
  }
  // Loading Part
  if (quizData.length === 0) {
    return <Text>Loading...</Text>;
  }

  const currentQuestion = quizData[updateQuestion];
  // handleAnswer function
  const handleAnswer=(selectedAnswer,optionId)=>{
    setOptionClick(true)
    if(selectedAnswer===currentQuestion.answer)
    {
      if(optionId===1)
      {
        setCorrect1(true)
        setScore(score+1)

      }
      else if(optionId===2)
      {
        setCorrect2(true)
        setScore(score+1)
      }
      else if(optionId===3)
      {
        setCorrect3(true)
        setScore(score+1)
      }
      else{
        setCorrect4(true)
        setScore(score+1)
      } 
    }
    else{
      if(optionId===1)
      {
        setInCorrect1(true)
      }
      else if(optionId===2)
      {
        setInCorrect2(true)
      }
      else if(optionId===3)
      {
        setInCorrect3(true)
      }
      else
      {
        setInCorrect4(true)
      }
    }
  }
  // handleQuit function
  const handleQuit=()=>{
    navigation.navigate('Home');
    setScore(0);
    setUpdateQuestion(0);
    setCorrect1(false)
    setInCorrect1(false)
    setCorrect2(false)
    setInCorrect2(false)
    setCorrect3(false)
    setInCorrect3(false)
    setCorrect4(false)
    setInCorrect4(false)
  }


  return (
    <View className="w-80 h-max bg-blue-400 p-4 rounded-md">
          <Text className="p-4 rounded bg-white text-center font-bold">{currentQuestion.question}</Text>
          <View className="flex items-center justify-center flex-col gap-2 p-2">
            {correct1?
            <TouchableOpacity onPress={()=>handleAnswer(currentQuestion.options.op1,1)} disabled={optionClick}>
              <Text className="py-3 px-16 w-64 rounded text-center bg-green-500">{currentQuestion.options.op1}</Text>
            </TouchableOpacity>
            :inCorrect1?
            <TouchableOpacity onPress={()=>handleAnswer(currentQuestion.options.op1,1)} disabled={optionClick}>
               <Text className="py-3 px-16 w-64 rounded text-center bg-red-500">{currentQuestion.options.op1}</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={()=>handleAnswer(currentQuestion.options.op1,1)} disabled={optionClick}>
               <Text className="py-3 px-16 w-64 rounded text-center bg-white">{currentQuestion.options.op1}</Text>
            </TouchableOpacity>
            }
            {correct2?
            <TouchableOpacity onPress={()=>handleAnswer(currentQuestion.options.op2,2)} disabled={optionClick}>
               <Text className="py-3 px-16 w-64 rounded text-center bg-green-500" >{currentQuestion.options.op2}</Text>
            </TouchableOpacity>
            :inCorrect2?
            <TouchableOpacity onPress={()=>handleAnswer(currentQuestion.options.op2,2)} disabled={optionClick}>
               <Text className="py-3 px-16 w-64 rounded text-center bg-red-500" >{currentQuestion.options.op2}</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={()=>handleAnswer(currentQuestion.options.op2,2)} disabled={optionClick}>
               <Text className="py-3 px-16 w-64 rounded text-center bg-white" >{currentQuestion.options.op2}</Text>
            </TouchableOpacity>
            }
            {correct3?
            <TouchableOpacity onPress={()=>handleAnswer(currentQuestion.options.op3,3)} disabled={optionClick}>
              <Text className="py-3 px-16 w-64 rounded text-center bg-green-500">{currentQuestion.options.op3}</Text>
            </TouchableOpacity>
            :inCorrect3?
            <TouchableOpacity onPress={()=>handleAnswer(currentQuestion.options.op3,3)} disabled={optionClick}>
              <Text className="py-3 px-16 w-64 rounded text-center bg-red-500">{currentQuestion.options.op3}</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={()=>handleAnswer(currentQuestion.options.op3,3)} disabled={optionClick}>
              <Text className="py-3 px-16 w-64 rounded text-center bg-white">{currentQuestion.options.op3}</Text>
            </TouchableOpacity>
            }
            {correct4?
            <TouchableOpacity onPress={()=>handleAnswer(currentQuestion.options.op4,4)} disabled={optionClick}>
              <Text className="py-3 px-16 w-64 rounded text-center bg-green-500">{currentQuestion.options.op4}</Text>
            </TouchableOpacity>
            :inCorrect4?
            <TouchableOpacity onPress={()=>handleAnswer(currentQuestion.options.op4,4)} disabled={optionClick}>
              <Text className="py-3 px-16 w-64 rounded text-center bg-red-500">{currentQuestion.options.op4}</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={()=>handleAnswer(currentQuestion.options.op4,4)} disabled={optionClick}>
              <Text className="py-3 px-16 w-64 rounded text-center bg-white">{currentQuestion.options.op4}</Text>
            </TouchableOpacity>
            }

            
        </View>
        <View  className='flex flex-row justify-around items-center p-3'>
          <TouchableOpacity onPress={handleQuit}>
            <Text className='bg-red-700 px-6 py-2 text-white rounded'>Quit</Text>
          </TouchableOpacity>
          <TouchableOpacity className='flex flex-row justify-around items-center p-3' onPress={handleNextQuestion}>
            <Text className='bg-green-700 px-6 py-2 text-white rounded' >Next</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default Quizcard

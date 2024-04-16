import React from 'react'
import { Text , TouchableOpacity, View } from 'react-native'

const Setting = ({navigation}) => {
  return (
    <View className='w-full h-full bg-slate-300 justify-center items-center'>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
          <Text className="bg-black p-4 text-md text-white font-semibold rounded-sm">Back to Home</Text>
        </TouchableOpacity>
    </View>
    
  )
}

export default Setting
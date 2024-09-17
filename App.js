import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './Navigation/AuthStack'



const App = () => {
 
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
      <AuthStack />
      </NavigationContainer>
    </SafeAreaView>
  
  )
}

export default App

import { createStackNavigator } from '@react-navigation/stack'
import { Screens } from 'Config'
import Home from 'Containers/Home'
import React from 'react'

const MainStack = createStackNavigator()

export default function MainNavigator() {
  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name={Screens.home} component={Home} />
    </MainStack.Navigator>
  )
}

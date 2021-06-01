import { createStackNavigator } from '@react-navigation/stack'
import { Screens } from 'Config'
import React from 'react'
import AuthStack from './AuthStack'
import DrawerStack from './DrawerStack'

const RootStack = createStackNavigator()

const AppNavigator = () => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name={Screens.authStack} component={AuthStack} />
      <RootStack.Screen name={Screens.drawerStack} component={DrawerStack} />
    </RootStack.Navigator>
  )
}

export default AppNavigator

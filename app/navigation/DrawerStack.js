import { createDrawerNavigator } from '@react-navigation/drawer'
import { CustomDrawer } from 'Components'
import { Screens } from 'Config'
import React from 'react'
import BottomTabStack from './BottomTabStack'

const DrawerStack = createDrawerNavigator()

export default function DrawerNavigator() {
  return (
    <DrawerStack.Navigator
      headerMode="none"
      drawerContent={({ navigation }) => <CustomDrawer navigation={navigation} />}
    >
      <DrawerStack.Screen name={Screens.bottomTabStack} component={BottomTabStack} />
    </DrawerStack.Navigator>
  )
}

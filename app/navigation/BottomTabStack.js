import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTab } from 'Components'
import { Screens } from 'Config'
import React from 'react'
import { StyleSheet } from 'react-native'
import AppStack from './AppStack'

const BottomTabStack = createBottomTabNavigator()

export default function TabNavigator() {
  return (
    <BottomTabStack.Navigator
      headerMode="none"
      tabBar={({ navigation }) => <BottomTab navigation={navigation} />}
      activeColor="#f0edf6"
      inactiveColor="red"
      barStyle={styles.barStyle}
    >
      <BottomTabStack.Screen name={Screens.appStack} component={AppStack} />
    </BottomTabStack.Navigator>
  )
}

const styles = StyleSheet.create({
  barStyle: { backgroundColor: '#694fad' },
})

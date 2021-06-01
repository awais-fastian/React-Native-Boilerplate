import { Text } from 'Components'
import { tabIcons } from 'Helpers'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { TouchableOpacity, View } from 'react-native'
import styles from './BottomTab.Styles'

function BottomTab(props) {
  const [t, i18n] = useTranslation()

  const i18 = (key) => {
    return t(key)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab}>
        {tabIcons.search}
        <Text style={styles.tabText}>{i18('BottomTab.search')}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        {tabIcons.home}
        <Text style={styles.tabText}>{i18('BottomTab.home')}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        {tabIcons.profile}
        <Text style={styles.tabText}>{i18('BottomTab.profile')}</Text>
      </TouchableOpacity>
    </View>
  )
}

export { BottomTab }

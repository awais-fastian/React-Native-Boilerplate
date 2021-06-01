import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import AppIntroSlider from 'react-native-app-intro-slider'
import { withTheme } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Screens } from 'Config'
import styles from './Walkthrough.Styles'

const WalkThrough = ({ theme, navigation }) => {
  const { colors } = theme
  const [t, i18n] = useTranslation()

  const i18 = (key) => {
    return t(key)
  }

  const slides = [
    {
      key: 'screen1',
      title: i18('Intro.title1'),
      text: i18('Intro.description1'),
      backgroundColor: 'white',
    },
    {
      key: 'screen2',
      title: i18('Intro.title2'),
      text: i18('Intro.description2'),
      backgroundColor: 'white',
    },
    {
      key: 'screen3',
      title: i18('Intro.title3'),
      text: i18('Intro.description3'),
      backgroundColor: 'white',
    },
  ]

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.itemContainer}>
        {index < 2 && (
          <TouchableOpacity
            style={styles.skip}
            onPress={() => navigation.navigate(Screens.drawerStack)}
          >
            <Text
              style={{
                color: colors.primary,
              }}
            >
              {i18('Intro.skip')}
            </Text>
          </TouchableOpacity>
        )}

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.text}</Text>
      </View>
    )
  }

  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons name="md-arrow-round-forward" color={colors.white} size={24} />
      </View>
    )
  }
  const renderDoneButton = () => {
    return (
      <TouchableOpacity
        style={styles.buttonCircle}
        onPress={() => navigation.navigate(Screens.drawerStack)}
      >
        <Ionicons name="md-checkmark" color={colors.white} size={24} />
      </TouchableOpacity>
    )
  }

  return (
    <AppIntroSlider
      data={slides}
      showNextButton={true}
      showDoneButton={true}
      onSkip={() => navigation.navigate(Screens.home)}
      activeDotStyle={{ backgroundColor: colors.primary }}
      renderItem={renderItem}
      renderDoneButton={renderDoneButton}
      renderNextButton={renderNextButton}
    />
  )
}
export default withTheme(WalkThrough)

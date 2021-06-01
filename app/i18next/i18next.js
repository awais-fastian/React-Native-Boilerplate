import React from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en, fr } from './localize'

const LOCALE_PERSISTENCE_KEY = 'language'

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async (language) => {
    const persistedLocale = await AsyncStorage.getItem(LOCALE_PERSISTENCE_KEY)
    if (!persistedLocale) {
      return language('en')
    }
    return language(persistedLocale)
  },
  init: () => {},
  cacheUserLanguage: (locale) => {
    AsyncStorage.setItem(LOCALE_PERSISTENCE_KEY, locale)
  },
}

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      fr: {
        translation: fr,
      },
    },
  })
export default i18next

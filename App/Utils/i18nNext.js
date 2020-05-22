import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import i18next from 'i18next';
import {initReactI18next, useTranslation} from 'react-i18next';
import en from '../Assets/Localize/en.json';
import fr from '../Assets/Localize/fr.json';
const LOCALE_PERSISTENCE_KEY = 'language';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async language => {
    const persistedLocale = await AsyncStorage.getItem(LOCALE_PERSISTENCE_KEY);
    if (!persistedLocale) {
      // Find best available language from the resource ones

      // Return detected locale or default language
      return language('en');
    }
    language(persistedLocale);
  },
  init: () => {},
  cacheUserLanguage: locale => {
    AsyncStorage.setItem(LOCALE_PERSISTENCE_KEY, locale);
  },
};

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
  });
export default i18next;

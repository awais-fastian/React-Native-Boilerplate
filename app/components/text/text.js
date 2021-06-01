import { FontHelper } from 'Helpers'
import _ from 'lodash'
import React from 'react'
import { StyleSheet, Text as RCText } from 'react-native'

const Text = ({ style, children }) => {
  let textStyle = { ...style }
  if (textStyle instanceof Array) {
    textStyle = _.map(
      style,
      (styleObject) => styleObject && FontHelper(StyleSheet.flatten(styleObject)),
    )
  } else {
    textStyle = FontHelper(StyleSheet.flatten(style || {}))
  }

  return <RCText style={style}>{children}</RCText>
}

export { Text }

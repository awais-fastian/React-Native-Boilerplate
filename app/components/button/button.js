import React from 'react'
import { Button, withTheme } from 'react-native-paper'
import styles from './Button.Styles'

function AppButton({ title, style, labelStyles, onSubmit, isLoadingVisible }) {
  return (
    <Button
      labelStyle={{ ...styles.label, ...labelStyles }}
      mode="contained"
      uppercase={false}
      onPress={onSubmit}
      loading={isLoadingVisible}
      style={{ ...styles.container, ...style }}
    >
      {title}
    </Button>
  )
}

export default withTheme(AppButton)

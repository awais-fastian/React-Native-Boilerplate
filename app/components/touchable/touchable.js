import React from 'react'
import { TouchableOpacity } from 'react-native'

const Touchable = ({ children, onPress, style, disabled }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={style}
      underlayColor="transparent"
      activeOpacity={0.7}
    >
      {children}
    </TouchableOpacity>
  )
}

export { Touchable }

import 'react-native'
import React from 'react'
import { AppButton } from 'Components'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

describe('should renders correctly', () => {
  it('AppButton', () => {
    renderer.create(<AppButton />)
  })
})

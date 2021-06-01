import _ from 'lodash'

// use post script names for font families
const SFProDisplay = {
  100: { fontFamily: 'SFProDisplay-Ultralight' },
  '100italic': { fontFamily: 'SFProDisplay-UltralightItalic' },
  200: { fontFamily: 'SFProDisplay-Thin' },
  '200italic': { fontFamily: 'SFProDisplay-ThinItalic' },
  300: { fontFamily: 'SFProDisplay-Light' },
  '300italic': { fontFamily: 'SFProDisplay-LightItalic' },
  400: { fontFamily: 'SFProDisplay-Regular' },
  '400italic': { fontFamily: 'SFProDisplay-RegularItalic' },
  500: { fontFamily: 'SFProDisplay-Medium' },
  '500italic': { fontFamily: 'SFProDisplay-MediumItalic' },
  600: { fontFamily: 'SFProDisplay-Semibold' },
  '600italic': { fontFamily: 'SFProDisplay-SemiboldItalic' },
  700: { fontFamily: 'SFProDisplay-Bold' },
  '700italic': { fontFamily: 'SFProDisplay-BoldItalic' },
  800: { fontFamily: 'SFProDisplay-Heavy' },
  '800italic': { fontFamily: 'SFProDisplay-HeavyItalic' },
  900: { fontFamily: 'SFProDisplay-Black' },
  '900italic': { fontFamily: 'SFProDisplay-BlackItalic' },
}

const FONTS = {
  SFProDisplay,
}

export function FontHelper(fontParams) {
  let { fontFamily, fontWeight, fontStyle } = fontParams
  fontFamily = fontFamily || 'SFProDisplay'
  fontWeight = fontWeight || '400'
  fontStyle = fontStyle || ''

  const styles = {
    ..._.omit(fontParams, ['fontFamily', 'fontWeight', 'fontStyle']),
    ...FONTS[fontFamily][fontWeight + fontStyle],
  }

  return styles
}

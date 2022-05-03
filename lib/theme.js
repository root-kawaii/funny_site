import {extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'


const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props)
    }
  })
}

const components = {
  Link: {
    baseStyle: props => ({
      color: mode('#ac3b61', '#D6BCFA')(props),
      textUnderlineOffset: 3
    })
  },
  Heading:{
    baseStyle: props => ({
      color: mode('#ac3b61', '#D6BCFA')(props),
      textDecorationColor: '#525252',
      textDecorationThickness: 4,

    })  },
Button: {
  baseStyle: props => ({
    bg: mode("#ac3b61","#D6BCFA")(props)
  }),
 
}
}
const fonts = {
  heading: "'Epilogue'"
}

const colors = {
  grassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
import { extendTheme } from '@chakra-ui/react'

//https://flatuicolors.com/palette/ca

const primar = '#10ac84'
const secondary = '#171923'
const white = '#fff'
const subText = '#9f9f9f'

const colors = {
  primary: primar,
  logo: white,
  icon: primar,
  bgInput: white,
  bgIcon: white,
  bgSearchButton: primar,
  SearchButton: white,
  spinner: primar,
  background: '#f6f6f6',
  borderInput: primar,
  cardBackground: white,
  title: secondary,
  number: secondary,
  subtitle: subText,
}

export const theme = extendTheme({ colors })
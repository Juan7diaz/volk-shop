import { ChakraProvider } from '@chakra-ui/react'
import UserProvider from '../context/UserProvider'
import { theme } from '../theme/app-theme'

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </UserProvider>
  )
}

export default MyApp

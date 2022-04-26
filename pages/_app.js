
import Layout from '../components/layouts/main'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../lib/theme'
import Fonts from '../components/font'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts/>
      <Layout router={router}>
          <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default Website

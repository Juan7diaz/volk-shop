import Head from 'next/head'
import { Navbar, Banner, Footer } from '../components'
import { Heading, useColorModeValue } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

const RandomProductsDynamic = dynamic(
  () => import('../components/randomProducts/RandomProducts'),
  {
    ssr: false
  }
)

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>VOLK&apos;S | SHOP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        <Banner />
      </main>
      <Heading
        as="h1"
        size="lg"
        isTruncated
        pl={'40px'}
        py={'10'}
        color={useColorModeValue('primary')}
      >
        Random products
      </Heading>
      <RandomProductsDynamic products={products} />
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  const allProducts = await fetch('http://localhost:3000/api/allProducts')

  const products = await allProducts.json()

  return {
    props: {
      products
    }
  }
}

import { Box, SimpleGrid } from '@chakra-ui/react'
import CardProduct from './CardProduct'

export default function index({ products }) {
  return (
    <Box pt={'100px'}>
      <SimpleGrid minChildWidth="250px" spacing="40px" px={'40px'}>
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

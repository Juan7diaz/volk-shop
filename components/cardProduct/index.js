import { Box, SimpleGrid } from '@chakra-ui/react'
import CardProduct from './CardProduct'

export default function Index({ products }) {
  return (
    <Box>
      <SimpleGrid minChildWidth="250px" spacing="40px" px={'40px'}>
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

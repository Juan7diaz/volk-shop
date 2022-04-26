import Rating from './Rating'

import { Flex, Box } from '@chakra-ui/react'
import AddToCart from './AddToCart'

export default function CardProductsBody({ product }) {
  const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  })
  return (
    <Box p="6">
      {/* nombre del prodcuto y boton de addcarrito */}
      <Flex mt="1" justifyContent="space-between">
        <Box fontSize="lg" fontWeight="semibold" as="h4">
          {product.name}
        </Box>

        <AddToCart />
      </Flex>

      {/* raiting y precio */}
      <Box fontSize="lg" color={'gray.800'}>
        {formatterPeso.format(product.price)}
        <Box as="span" color={'gray.600'} fontSize="xl">
          {' '}
          Cop
        </Box>
      </Box>
      <Flex justifyContent="space-between" style={{ paddingTop: '10px' }}>
        <Rating rating={product.rating} numReviews={product.numReviews} />
      </Flex>
    </Box>
  )
}

import { Box, Image } from '@chakra-ui/react'

import CardProductsBody from './CardProductBody'

export default function CardProduct({ product }) {
  return (
    <Box borderWidth="1px" rounded="lg" shadow="lg">
      <Image src={product.imageURLPrimary} alt={`Picture of ${product.name}`} roundedTop="lg" />

      {/* cuerpor de la tarjeta */}
      <CardProductsBody product={product} />
    </Box>
  )
}

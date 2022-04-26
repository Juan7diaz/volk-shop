import { Box, Image } from '@chakra-ui/react'

import CardProductsBody from './CardProductBody'

import styles from './CardProduct.module.css'

export default function CardProduct({ product }) {
  return (
    <Box borderWidth="1px">
      <Box className={styles.container}>
        <Image
          className={styles.img}
          src={product.imageURLPrimary}
          alt={`Picture of ${product.name}`}
        />
      </Box>

      {/* cuerporde la tarjeta */}
      <CardProductsBody product={product} />
    </Box>
  )
}

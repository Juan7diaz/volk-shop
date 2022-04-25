import { Icon, chakra, Tooltip } from '@chakra-ui/react'
import { FiShoppingCart } from 'react-icons/fi'

export default function AddToCart() {
  return (
    <Tooltip label="Add to cart" bg="white" placement="top" color="gray.800" fontSize="1.2em">
      <chakra.a display={'flex'}>
        <Icon as={FiShoppingCart} h={6} w={6} alignSelf={'center'} />
      </chakra.a>
    </Tooltip>
  )
}

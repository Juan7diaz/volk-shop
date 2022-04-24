import Rating from './Rating'

import { Flex, Box, useColorModeValue, Icon, chakra, Tooltip } from '@chakra-ui/react'
import { FiShoppingCart } from 'react-icons/fi'

export default function CardProductsBody({ data }) {
  return (
    <Box p="6">
      {/* nombre del prodcuto y boton de addcarrito */}
      <Flex mt="1" justifyContent="space-between">
        <Box fontSize="2xl" fontWeight="semibold" as="h4">
          {data.name}
        </Box>
        <Tooltip label="Add to cart" bg="white" placement="top" color="gray.800" fontSize="1.2em">
          <chakra.a href={'#'} display={'flex'}>
            <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
          </chakra.a>
        </Tooltip>
      </Flex>

      {/* raiting y precio */}
      <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
        {data.price}
        <Box as="span" color={'gray.600'} fontSize="lg">
          {' '}
          Cop
        </Box>
      </Box>
      <Flex justifyContent="space-between" style={{ paddingTop: '10px' }}>
        <Rating rating={data.rating} numReviews={data.numReviews} />
      </Flex>
    </Box>
  )
}

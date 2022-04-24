import Rating from './Rating'

import {
  Flex,
  Center,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';

const data = {
  imageURL:
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
  name: 'Wayfarer Classic',
  price: 412.5,
  rating: 4.2,
  numReviews: 34,
  tags: ['new', 'shirt']
};

export default function CardProducts() {
  return (
    <Center p={4}>
      <Box
        minW={'320'}
        maxW="xs"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        >
        <Image
          src={data.imageURL}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
        />

        {/*los nombre de los tags*/}
        <Box p="6">
          <Box >
            {data.tags.map( tag => (
              <Badge  key={tag}  mx='1'px="2" fontSize="0.8em" colorScheme="blue">
                {tag}
              </Badge>
            )
            )}
          </Box>

          {/* nombre del prodcuto y boton de addcarrito */}
          <Flex mt="1" justifyContent="space-between">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              >
              {data.name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement='top'
              color='gray.800'
              fontSize='1.2em'>
              <chakra.a href={'#'} display={'flex'}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
              </chakra.a>
            </Tooltip>
          </Flex>

          {/* raiting y precio*/}
          <Flex justifyContent="space-between" >
            <Rating rating={data.rating} numReviews={data.numReviews} />
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                $
              </Box>
              {data.price.toFixed(2)}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Center>
  );
}

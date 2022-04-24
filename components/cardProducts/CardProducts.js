import { Center, Box, Image } from '@chakra-ui/react'

import CardProductsBody from './CardProductsBody'

/* const data = {
  imageURL:
    'https://static.zara.net/photos///2022/V/1/2/p/2410/920/100/2/w/1126/2410920100_6_6_1.jpg?ts=1641209610931',
  name: 'Wayfarer Classic',
  price: 412.5,
  rating: 4.2,
  numReviews: 34,
  tags: ['new', 'shirt']
}
 */
export default function CardProducts({ data }) {
  return (
    <Center p={4}>
      <Box minW={'320'} maxW="xs" borderWidth="1px" rounded="lg" shadow="lg">
        <Image src={data.imageURLPrimary} alt={`Picture of ${data.name}`} roundedTop="lg" />

        {/* cuerpor de la tarjeta */}
        <CardProductsBody data={data} />
      </Box>
    </Center>
  )
}

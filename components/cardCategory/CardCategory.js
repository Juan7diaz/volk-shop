import { Box, Flex } from '@chakra-ui/react'

export default function CardCategory() {
  const basicBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    boxSize: '250px',
    color: 'white',
    textShadow: '0 0 20px black',
    fontWeight: 'bold',
    fontSize: '20px',
    px: 4,
    background:
      'url(https://picsum.photos/id/1080/200/300) center/cover no-repeat'
  }

  return (
    <Flex
      flexWrap="wrap"
      spacing="24px"
      gap="16px"
      justifyContent="space-evenly"
    >
      {/* adding filter property to the element */}
      <Box sx={basicBoxStyles} filter="grayscale(80%)">
        Box with Filter
      </Box>
    </Flex>
  )
}

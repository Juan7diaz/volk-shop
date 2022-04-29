import { chakra, Box, useColorModeValue, Icon } from '@chakra-ui/react'

export default function Feature({ children, title, icon }) {
  return (
    <Box>
      <Icon
        boxSize={12}
        color={useColorModeValue('primary')}
        mb={4}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        {icon}
      </Icon>
      <chakra.h3
        mb={3}
        fontSize="lg"
        lineHeight="shorter"
        fontWeight="bold"
        color={useColorModeValue('primary')}
      >
        {title}
      </chakra.h3>
      <chakra.p lineHeight="tall" color={useColorModeValue('text')}>
        {children}
      </chakra.p>
    </Box>
  )
}

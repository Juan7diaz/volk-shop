import React from 'react'
import { SimpleGrid, useColorModeValue } from '@chakra-ui/react'

import Feature from './Feature'
import { benefits } from '../../data/benefits'

export default function Benefits() {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      spacing={20}
      px={'40px'}
      pb={20}
      mx="auto"
      bg={useColorModeValue('white', 'gray.800')}
    >
      {benefits.map((benefit) => {
        const { id, icon, title, desc } = benefit
        return (
          <Feature title={title} key={id} icon={icon}>
            {desc}
          </Feature>
        )
      })}
    </SimpleGrid>
  )
}

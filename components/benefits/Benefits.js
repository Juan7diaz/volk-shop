import React from 'react'
import { SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import { FaUserShield, FaGlobeAmericas, FaHandHoldingUsd } from 'react-icons/fa'

import Feature from './Feature'

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
      <Feature title="Shopping security" icon={<FaUserShield />}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which dont look even slightly believable
      </Feature>

      <Feature title="the best price" icon={<FaHandHoldingUsd />}>
        Provide a seamless customer experience across channels, like reserving
        online and picking up in store. Our SDKs make it easy to integrate into
        your own mobile and web applications to accept in-store payments.
      </Feature>

      <Feature title="Shipping to all Latin America" icon={<FaGlobeAmericas />}>
        Lorem Ipsum is not simply random text. It has roots in a piece of
        classical Latin literature from 45 BC, making it over 2000 years old.
        Richard McClintock, a Latin professor at Hampden-Sydney College in
        Virginia
      </Feature>
    </SimpleGrid>
  )
}

import { Heading, useColorModeValue } from '@chakra-ui/react'

export default function NameSection({ title }) {
  return (
    <Heading
      as="h1"
      size="lg"
      isTruncated
      pl={'40px'}
      py={'10'}
      color={useColorModeValue('primary')}
    >
      {title}
    </Heading>
  )
}

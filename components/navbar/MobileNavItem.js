import { Flex, Text, Stack, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import Link from 'next/link'

export default function MobileNavItem({ label, children, href }) {
  const { onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none'
        }}
      >
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          <Link href={href ?? '#'}>
            <a>{label}</a>
          </Link>
        </Text>
      </Flex>
    </Stack>
  )
}

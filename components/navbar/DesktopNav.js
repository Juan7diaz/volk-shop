import { Box, Stack, useColorModeValue } from '@chakra-ui/react'

import Link from 'next/link'

import { NAV_ITEMS } from '../../data/navItems'

export default function DesktopNav() {
  return (
    <Stack direction={'row'} spacing={4} color={useColorModeValue('itemNav')}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link href={navItem.href ?? '#'}>
            <a>{navItem.label}</a>
          </Link>
        </Box>
      ))}
    </Stack>
  )
}

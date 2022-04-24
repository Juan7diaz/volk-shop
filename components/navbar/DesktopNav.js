import {
  Box,
  Stack,
  Popover,
  PopoverTrigger,
  useColorModeValue,
} from '@chakra-ui/react';

import Link from 'next/link'

import { NAV_ITEMS } from '../../data/navItems';

export default function DesktopNav()  {

  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');

  return (
    <Stack direction={'row'} spacing={4}>
      {
        NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}
                >
                  <a>{navItem.label}</a>
                </Link>
              </PopoverTrigger>
            </Popover>
          </Box>
        ))
      }
    </Stack>
  );
};

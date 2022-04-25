import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  useBreakpointValue,
  useDisclosure
} from '@chakra-ui/react'
import { FiMenu, FiX } from 'react-icons/fi'

import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <div>
      <Box style={{ position: 'fixed', width: '100%' }}>
        <Flex
          bg="white"
          color="gray.600"
          minH={'60px'}
          px={'40px'}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor="gray.200"
          align={'center'}
        >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
          >
            <IconButton
              onClick={onToggle}
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
              icon={isOpen ? <Icon as={FiX} w={5} h={5} /> : <Icon as={FiMenu} w={5} h={5} />}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color="gray.800"
              as={'h1'}
            >
              V O L K &apos; S
            </Text>

            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
            <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'}>
              Sign In
            </Button>
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'black'}
              href={'#'}
              _hover={{
                bg: 'gray.700'
              }}
            >
              Sign Up
            </Button>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </div>
  )
}

import { chakra, Flex, Box, Link } from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

import SocialButton from './SocialButton'

export default function Footer() {
  return (
    <Flex
      w="full"
      as="footer"
      flexDir={{ base: 'column', sm: 'row' }}
      align="center"
      justify="space-between"
      p="10"
      px={'40px'}
      _dark={{
        bg: 'gray.800'
      }}
    >
      <chakra.a
        href="#"
        fontSize="xl"
        color="primary"
        py={{ base: '0', xs: '100px' }}
      >
        V O L K &apos; S
      </chakra.a>
      <Box>
        Made with ♡ by{' '}
        <Link href="https://github.com/Juan7diaz/volk-shop" isExternal>
          Juan Diaz <FiExternalLink style={{ display: 'initial' }} />
        </Link>
      </Box>
      <Flex>
        <SocialButton label={'Instagram'} href={'#'}>
          <FaInstagram />
        </SocialButton>
        <SocialButton label={'Instagram'} href={'#'}>
          <FaTwitter />
        </SocialButton>
        <SocialButton label={'Instagram'} href={'#'}>
          <FaGithub />
        </SocialButton>
      </Flex>
    </Flex>
  )
}

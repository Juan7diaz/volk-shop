import { Box, VStack, Stack, Text, Center, Link } from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

import SocialButton from './SocialButton'

export default function Footer() {
  return (
    <Box pt={20} pb={10}>
      <Center>
        <VStack spacing={5}>
          <Box>
            <Text>
              2022 ▽Volk&apos;s. Made with ♡ by{' '}
              <Link href="https://github.com/Juan7diaz/volk-shop" isExternal>
                Juan Diaz <FiExternalLink style={{ display: 'initial' }} />
              </Link>
            </Text>
          </Box>
          <Box>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaGithub />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Box>
        </VStack>
      </Center>
    </Box>
  )
}

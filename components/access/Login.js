import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react'

import PasswordField from './PasswordField'
import OAuthButtonGroup from './OAuthButtonGroup'

import Link from 'next/link'

export default function Login() {
  return (
    <Container
      maxW="lg"
      py={{ base: '12', md: '24', lg: '10' }}
      pt={{ base: '100', lg: '120' }}
    >
      <Stack
        spacing="8"
        bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
        boxShadow={{ base: 'none', sm: 'md' }}
        borderRadius={{ base: 'none', sm: 'xl' }}
      >
        <Stack spacing="6">
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Text
              fontSize="4xl"
              color={useColorModeValue('primary')}
              size={useBreakpointValue({ base: 'xs', md: 'sm' })}
            >
              ▽ VOLK &apos;S
            </Text>
            <HStack spacing="1" justify="center">
              <Text color={useColorModeValue('text')}>
                we are delighted to have you back
              </Text>
            </HStack>
          </Stack>
        </Stack>
        <Box py={{ base: '0', sm: '8' }} px={{ base: '4', sm: '10' }}>
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel
                  htmlFor="email"
                  color={useColorModeValue('nameInput')}
                >
                  Email
                </FormLabel>
                <Input id="email" name={'email'} type="email" />
              </FormControl>
              <PasswordField />
            </Stack>
            <Stack spacing="6">
              <Button
                color={useColorModeValue('secondary')}
                bg={useColorModeValue('primary')}
                _hover={{
                  bg: 'gray.700'
                }}
              >
                Sign In
              </Button>
              <HStack>
                <Divider />
                <Text
                  fontSize="sm"
                  whiteSpace="nowrap"
                  color={useColorModeValue('text')}
                >
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
            <HStack spacing="1" justify="center">
              <Text color={useColorModeValue('text')}>
                Don&apos;t have an account?
              </Text>
              <Link href={'/access/register'}>
                <a>
                  <Button
                    variant="link"
                    colorScheme={useColorModeValue('primary')}
                  >
                    Sign Up
                  </Button>
                </a>
              </Link>
            </HStack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}

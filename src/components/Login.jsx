import { Button, Container, Heading, Input, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login=()=> {
  return (
    <Container maxW={'containder.xl'} h={'100vh'} p={'16'}>
        <form>
            <VStack
                alignItems={'streth'}
                spacing={'8'}
                w={['full','96']}
                m={'auto'}
                my={'16'}>
                <Heading>Welcome Back</Heading>
                <Input placeholder='Email' type={'email'} required focusBorderColor='purple.500'>
                </Input>
                <Input placeholder='Password' type={'password'} required focusBorderColor='purple.500'>
                </Input>
                <Button variant={'link'} alignSelf={'flex-end'}>
                    <Link to={'/foregetpassword'}>Forget ?</Link>
                </Button>
                <Button type={'submit'} colorScheme='purple'>
                    <Link to={'/foregetpassword'}>Login</Link>
                </Button>
                <Text align={'left'}>New User ?{" "} 
                    <Button variant={'link'} alignSelf={'flex-end'} colorScheme='purple'>
                        <Link to={'/signup'}>SignUp</Link>
                    </Button>
                </Text>
                
            </VStack>
        </form>

    </Container>
  )
}

export default Login

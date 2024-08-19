import { Button, Container, Heading, Input, VStack,Text, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp=()=> {
  return (
    <Container maxW={'containder.xl'} h={'100vh'} p={'16'}>
        <form>
            <VStack
                alignItems={'streth'}
                spacing={'8'}
                w={['full','96']}
                m={'auto'}
                my={'16'}>
                <Heading>Welcome</Heading>
                <Avatar alignSelf={'center'} boxSize={'32'}></Avatar>
                <Input placeholder='Name' type={'text'} required focusBorderColor='purple.500'>
                </Input>
                <Input placeholder='Email' type={'email'} required focusBorderColor='purple.500'>
                </Input>
                <Input placeholder='Create Password' type={'password'} required focusBorderColor='purple.500'>
                </Input>
                <Input placeholder='Re-enter Password' required focusBorderColor='purple.500'>
                </Input>
                {/* <Button variant={'link'} alignSelf={'flex-end'}>
                    <Link to={'/foregetpassword'}>Forget ?</Link>
                </Button> */}
                <Button type={'submit'} colorScheme='purple'>
                    <Link to={'/'}>Creat Account</Link>
                </Button>
                <Text align={'left'}>Already Signed Up ?{" "} 
                    <Button variant={'link'} alignSelf={'flex-end'} colorScheme='purple'>
                        <Link to={'/login'}>Login</Link>
                    </Button>
                </Text>
                
            </VStack>
        </form>

    </Container>
  )
}

export default SignUp

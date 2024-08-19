
import {Box, Heading, VStack, Stack, HStack, Button, Input,Text} from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from "react-icons/ai";

const Footer = () => {

  // console.log('hello');
  return (
   <>
    <Box bgColor={'black'}
    minH={'40'}
    p={'16'}
    color={'white'}>
    
    <Stack direction={['column','row']}>
      
      <VStack alignItems={'streach'} w={'full'} px={'4'} textAlign={['center','left']}>
        <Heading size='md' textTransform={'uppercase'}>
          subscribe to get updates
        </Heading>
        <HStack
          borderBottom={'2px solid white'}
          py={'2'}>
          <Input placeholder="Enter your name here" focusBorderColor='white'></Input>
          <Button
            paddin={'0'}
            bgColor={'white'}
            collorScheme={'purple'}
            variant={'ghost'}
            borderRadius={'0 20px 20px 0'}>
            <AiOutlineSend size={20}/>
          </Button>
        </HStack>
      </VStack>

      <VStack w={'full'}
        borderLeft={['none','1px solid white']}
        borderRight={['none','1px solid white']}>
          <Heading size={'md'} 
            textTransform={'uppercase'}
            textAlign={'center'}>
              VIDEO CENTER
          </Heading>
          <Text>
            All rights reserved
          </Text>
      </VStack>

      <VStack w={'full'}>
        <Heading size={'md'} textTransform={'uppercase'}>Social Media</Heading>
        <Button variant={'link'} colorScheme={'white'}><a href='https://github.com/Sohail22515' target='blank'>Github</a></Button>
        <Button variant={'link'} colorScheme={'white'}><a href='https://www.linkedin.com/in/mohammad-sohail22515/' target='blank'>Linkdin</a></Button>
      </VStack>
    </Stack>

    </Box>
    </> 
  )
}

export default Footer;
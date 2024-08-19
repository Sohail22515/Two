import React from 'react'
import {Button, Container, HStack, VStack,Input} from '@chakra-ui/react'
import {AiOutlineCloudUpload} from 'react-icons/ai'

const UpLoad = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
            <AiOutlineCloudUpload size={'10vmax'}></AiOutlineCloudUpload>
            <form>
                <HStack>
                    <Input requiread type={'file'} css={{
                        '&::file-selector-button':{
                            border:'none',
                            width:'calc(100% + 36px)',
                            height:'100%',
                            marginLeft:'-18px',
                            color:'purple',
                            backgroundColor:'white',
                            cursor:'pointer'

                        }
                    }}></Input>
                    <Button>Upload</Button>
                </HStack>
            </form>
        </VStack>   
    </Container>
  )
}

export default UpLoad
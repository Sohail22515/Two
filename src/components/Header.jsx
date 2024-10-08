import React from 'react'
import {Drawer,DrawerBody,
        DrawerHeader,
        DrawerCloseButton,
        DrawerOverlay,
        DrawerContent,
        Button,
        useDisclosure,
        VStack,
        HStack} from '@chakra-ui/react'

import {Link} from 'react-router-dom'
import {BiMenuAltLeft} from 'react-icons/bi'

function Header() {
    const{isOpen,onOpen,onClose}=useDisclosure()
  return (
    <>
    <Button 
        zIndex={'overlay'}
        position={'fixed'} 
        top={'4'} 
        left={'4'} 
        colorScheme='purple' 
        p={'0'} 
        w={'10'} 
        h={'10'} 
        borderRadius={'full'}
        onClick={onOpen}
        >
        
            <BiMenuAltLeft size={'20'}/>
    </Button>
    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay/>
            <DrawerContent>
                <DrawerCloseButton/>
                <DrawerHeader>Code Your Life</DrawerHeader>
                <DrawerBody>
                    <VStack alignItems={'flex-start'}>
                        <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                            <Link to='/'>Home</Link>
                        </Button>

                        <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                            <Link to='/videos'>Videos</Link>
                        </Button>

                        <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                            <Link to='/videos?category=free'>Free Videos</Link>
                        </Button>

                        <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                            <Link to='/upload'>Upload Video</Link>
                        </Button>
                    </VStack>

                    <HStack 
                        pos={'absolute'} 
                        bottom={'10'} 
                        left={'0'} 
                        width={'full'}
                        justifyContent={'space-evenly'}>
                        <Button onClick={onClose} colorScheme='purple'>
                            <Link to={'/login'}>Log In</Link> 
                        </Button> 

                        <Button onClick={onClose} olorScheme='purple' variant={'outline'}>
                            <Link to={'/signUp'}>Sign Up</Link> 
                        </Button>
                    </HStack>


                </DrawerBody>
            </DrawerContent>
    </Drawer>
    </>
  )
}

export default Header
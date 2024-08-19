import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'
// import { transform } from 'framer-motion'

const headingOptions={
    pos:'absolute',
    left:'50%',
    top:"50%",
    transform:'translate(-50%,-50%)',
    textTransform:'uppercase',
    p:'4',
    size:'4xl'
      
}

const Home=()=> {
  return (

        <Box>
            <MyCarousel/>

            <Container maxW={'container.xl'} minH={'100vh'} p='16'>
                <Heading 
                    textTransform={'uppercase'} 
                    py={'2'} 
                    w={'fit-content'} 
                    borderBottom={'2px solid'}
                    margin={'auto'}>Services</Heading>

                <Stack
                    h={'full'}
                    p={'4'}
                    alignItems={'center'}
                    direction={['column','row']}
                    >

                <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'} />

                <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam veritatis cupiditate asperiores cum. Mollitia culpa quidem quasi dolor, tempore deserunt numquam, dolore earum eum labore a illo quod eaque atque unde amet ratione nisi qui maxime dolorem beatae quam? Quibusdam modi accusantium incidunt ratione ut beatae vero! Provident earum libero eligendi, porro eum doloribus ducimus ipsa culpa. Cupiditate consequatur aperiam commodi tenetur dicta magnam iste esse temporibus ex eum. Velit natus impedit dicta doloribus, assumenda nisi nobis quibusdam atque ipsa minima maxime facilis sint, voluptates culpa vitae delectus aspernatur pariatur possimus omnis! Consectetur itaque delectus laudantium voluptas reiciendis asperiores vel.
                </Text>
                 
                </Stack>
            
            </Container>
        </Box>
    
  );
}; 

const MyCarousel = () => (
    // console.log('hello');
    <Carousel 
        autoPlay
        infiniteLoop
        interval={2000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        >
        {/* console.log('hello2') */}
        <Box w="full" h={'100vh'}>
            <Image src={img1} h="full" w={'full'} objectFit={'cover'}/>
            <Heading bgColor={'blackAlpha.600'} color={'white '} {...headingOptions}>
                Watch the Future
            </Heading>
        </Box> 

        <Box w='full' h={'100vh'}>
            <Image src={img2} h="full" w={'full'} objectFit={'cover'}/>
            <Heading bgColor={'blackAlpha.600'} color={'white '}  {...headingOptions}>
                Future is gaming
            </Heading>
        </Box>

        <Box w='full' h={'100vh'}>
            <Image src={img3} h="full" w={'full'} objectFit={'cover'}/>
            <Heading bgColor={'blackAlpha.600'} color={'white '}  {...headingOptions}>
                Gaming on Console
            </Heading>
        </Box>

        <Box w='full' h={'100vh'}>
            <Image src={img4} h="full" w={'full'} objectFit={'cover'}/>
            <Heading bgColor={'blackAlpha.600'} color={'white '}  {...headingOptions}>
                Console to Check
            </Heading>
        </Box>

        
    </Carousel>
   
);

export default Home
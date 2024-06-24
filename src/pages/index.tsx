import React from 'react';
import { Box, Flex, Text, Container, SimpleGrid, Card, Button, Heading, CardHeader, CardBody, Collapse, CardFooter, AccordionPanel, Accordion, AccordionButton, AccordionIcon, AccordionItem, Stack, Image, Spacer } from '@chakra-ui/react';
import AccordionCard from '@/components/Accordion'
import CardStack from '@/components/CardStack';

const Home: React.FC = () => {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)
  return (
    <Container as="section" p='6' display="flex" flexDirection="row" justifyContent="space-between" borderRadius="12" border='none' w='100vw' h="calc(100vh - 64px)" maxW='100vw'>
      <Flex direction="column" w="70%" h='100%' maxH='100%' gap="2">
        <Box 
          bgImage="https://images.hdqwalls.com/wallpapers/harry-potter-20th-anniversary-return-to-hogwarts-2023-l2.jpg"
          objectFit="cover"
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          color="white"
          flex='1'
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          p="3"
          borderRadius="18"
          maxH='65%'
        >
          <Flex  justifyContent="space-between" align="flex-end" h="100%" w="100%" direction="row" gap='20%' >
            <Box display="flex" flexDirection="column" p='3' bg="rgba(0,0,0, 0.7)" borderRadius="12" border='none' backdropFilter="blur(10px)" gap='3' >
              <Heading fontSize='20px' color='#cdb373'>Did you know it?</Heading>
              <Flex direction='column'>
                <Collapse startingHeight={20} in={show} color='#b5b8a8'>
                  <Text color='#b5b8a8'>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                      terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                      labore wes anderson cred nesciunt sapiente ea proident.
                  </Text>
                </Collapse>
                <Button size='sm' w="8rem" onClick={handleToggle} mt='1rem' variant='solid' bg='#6b63b5' color='white'>
                  Show {show ? 'Less' : 'More'}
                </Button>
              </Flex>
            </Box>
            <CardStack />
          </Flex>
        </Box>
        <Flex direction="column" p='4' borderRadius="18" bg="#000" border='solid' borderWidth='1px' borderColor='#a27d2f' gap='3'>
          <Heading color='#' fontSize='20'>Testando hello</Heading>
          <Text color="#b5b8a8">Testando Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus obcaecati molestiae eveniet numquam. Adipisci itaque ut veritatis ex eligendi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor aspernatur reiciendis quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ex assumenda cupiditate nam facere tempore eius odio deserunt necessitatibus voluptate, labore, quis quos ducimus tenetur suscipit corporis accusantium architecto est? Quisquam, fuga!</Text>
        </Flex>
      </Flex>
      <Flex direction="column" maxW="30%" w="30%" maxH='100%' gap="3" px='4' >
        <SimpleGrid display="flex" flexDirection="column">
          <Card bg="#000" border='solid' borderWidth='1px' borderColor='#a27d2f' borderRadius="18" alignItems='center'>
            <CardHeader pb='0'>
              <Heading size='md' color='#cdb373'>— Know all the spells —</Heading>
            </CardHeader>
            <CardBody>
              <Text textColor="#b5b8a8" align='center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vitae magni maiores fugit totam impedit id saepe, sed excepturi recusandae magnam velit.</Text>
            </CardBody>
            <CardFooter pt='0'>
              <Button bg="#6b63b5" textColor="#fff">View here</Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
        <AccordionCard/>
      </Flex>
    </Container>
  );
};

export default Home;

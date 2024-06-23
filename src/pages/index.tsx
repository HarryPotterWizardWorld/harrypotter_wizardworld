import React from 'react';
import { Box, Flex, Text, Container, SimpleGrid, Card, Button, Heading, CardHeader, CardBody, Collapse, CardFooter, AccordionPanel, Accordion, AccordionButton, AccordionIcon, AccordionItem, Stack, Image, Spacer } from '@chakra-ui/react';
import AccordionCard from '@/components/Accordion'
import CardStack from '@/components/CardStack';

const Home: React.FC = () => {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)
  return (
    <Container as="section" p='6' display="flex" flexDirection="row" justifyContent="space-between" borderRadius="12" border='none' w='100vw' h="calc(100vh - 64px)" maxW='100vw'>
      <Flex direction="column" w="70%" gap="2">
        <Box 
          bgImage="https://wallpapers.com/images/featured/harry-potter-gi5aixvd4d26cpij.jpg"
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
        >
          <Flex  justifyContent="space-between" align="flex-end" h="100%" w="100%" direction="row" gap='20%' >
            <Box display="flex" flexDirection="column" p='3' bg="rgba(100, 123, 200, 0.4)" borderRadius="12" border='none' backdropFilter="blur(10px)" >
                <Collapse startingHeight={20} in={show}>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                  terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                  labore wes anderson cred nesciunt sapiente ea proident.
              </Collapse>
              <Button size='sm' w="8rem" onClick={handleToggle} mt='1rem' variant="outline" color="white">
                Show {show ? 'Less' : 'More'}
              </Button>
            </Box>
            <CardStack />
          </Flex>
        </Box>
        <Flex direction="column" p='4' borderRadius="18" bg="rgba(100, 123, 200, 0.2)" gap='3'>
          <Heading color='white' fontSize='20'>Testando hello</Heading>
          <Text color="white">Testando Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus obcaecati molestiae eveniet numquam. Adipisci itaque ut veritatis ex eligendi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor aspernatur reiciendis quod.</Text>
        </Flex>
      </Flex>
      <Flex direction="column" maxW="30%" w="30%" maxH='100%' gap="3" px='4' >
        <SimpleGrid display="flex" flexDirection="column">
          <Card bg="rgba(100, 123, 200, 0.2)" borderRadius="18">
            <CardHeader>
              <Heading size='md' color='#DFEDF2'>Know all the spells</Heading>
            </CardHeader>
            <CardBody>
              <Text textColor="white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vitae magni maiores fugit totam impedit id saepe, sed excepturi recusandae magnam velit.</Text>
            </CardBody>
            <CardFooter>
              <Button bg="#3868A6" textColor="white" fontWeight="300">View here</Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
        <AccordionCard/>
      </Flex>
    </Container>
  );
};

export default Home;

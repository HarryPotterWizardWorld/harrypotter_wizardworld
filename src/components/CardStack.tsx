import React from 'react';
import { Box, Flex, Text, Card, Button, Heading, CardHeader, CardBody, CardFooter, Image, Stack } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons'
import cardData from '../data/dataCard.json';

export default function CardStack() {
  return (
    <Flex direction="column" justifyContent='space-evenly' alignItems='end' maxH='100%' maxW='100%' w='100%' h='100%' gap='2'>
      {cardData.map((card, index) => (
        <Card
          key={index}
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          size='sm'
          h='100px'
          w='100%'
          p='2'
          bg="rgba(100, 123, 200, 0.4)"
          borderRadius="12"
          border='none'
          backdropFilter="blur(10px)"
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '30%' }}
            src={card.image}
            alt={card.title}
            borderRadius='12'
          />
          <Stack display='flex' flexDirection='row' flex='1' alignItems='center' gap='0'>
            <CardBody px='2' py='1' maxH='100%' display='flex' flexDirection='column'>
              <Heading color='white' size={{ base: 'sm', sm: 'sm' }}>{card.title}</Heading>
              <Text py='1' textColor='#f0f0f0' fontSize={{ base: '12px', sm: '12px', md: '14px' }}>
                {card.description}
              </Text>
            </CardBody>
            <CardFooter p='0' alignItems='center'>
              <Button variant='ghost' colorScheme='blue'>
                <ArrowForwardIcon/>
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      ))}
    </Flex>
  );
}

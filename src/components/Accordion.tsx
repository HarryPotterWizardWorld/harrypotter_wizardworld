import React from 'react';
import { Box, Flex, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import accordionData from '../data/accordingData.json';

export default function AccordionCard() {
  return (
    <Box bg="#000" border='solid' borderWidth='1px' borderColor='#a27d2f' borderRadius="18" h="100%" display='flex' flexDirection='column' p='5' gap='3'>
      <Flex>
        <Heading fontSize='20' color='#cbaa46'>Testando</Heading>
      </Flex>
      <Box>
        <Accordion allowToggle maxH='100%'>
          {accordionData.map((item, index) => (
            <AccordionItem
              key={index}
              // bgImage={`url(${item.image})`}
              bgSize="cover"
              bgPosition="center"
              bgRepeat="no-repeat"
              minHeight="100%"
              color="white"
              border="none"
              borderRadius="8"
            >
              <h2>
                <AccordionButton h="55px">
                  <Box as='span' flex='1' textAlign='left'>
                    {item.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} h="35%">
                {item.description}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Box>
  );
}

import React from 'react';
import { Box, Flex, Text, Spacer, Container, Heading, Button, Image, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import Link from "next/link"

const Home: React.FC = () => {
  return (
    <Container p='3' flex='1' bg="rgba(5, 3, 43, 0.88)" borderRadius="12" border='none' maxHeight='88vh' h='100vh' w='800px'>
      <Flex>
        <Text>Oi testanto harry potter</Text>
        <Text>Oi testanto harry potter</Text>
      </Flex>
    </Container>
  );
}

export default Home;
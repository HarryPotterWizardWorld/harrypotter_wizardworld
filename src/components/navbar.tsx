import React from 'react';
import { Box, Flex, Text, Spacer, Container, Heading, Button, Image, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import Link from "next/link"
import hp from '../../public/harry-potter.svg'


export default function Navbar () {
    const buttonHeader = {
        color:"white",
        variant:"ghost",
        fontWeight:"300",
        width:"100px",
        _hover: {
            bg:"none",
            color:"gray.700"
        }
    }
    return (
        <Flex as="header" p='3'>
      <Flex py="2" w='100%' px="8" alignItems="center" bg="rgba(100, 123, 200, 0.2)" borderRadius="12" border='none' backdropFilter="blur(10px)">
        <Text fontSize="xl" fontWeight="300" color="white">WIZARD WORLD</Text>
        <Spacer />
        <Flex justifyContent='end'>
          <Button {...buttonHeader}>
            <Link href="/About" passHref>
              About Us
            </Link>
          </Button>
          <Button {...buttonHeader}>New</Button>
        </Flex>
      </Flex>
      </Flex>
    )
}
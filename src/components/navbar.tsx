import React from 'react';
import { Box, Flex, Text, Spacer, Container, Heading, Button, Image, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import Link from "next/link"
import hp from '../../public/harry-potter.svg'


export default function Navbar () {
    const buttonHeader = {
        color:"#cbaa46",
        variant:"ghost",
        fontWeight:"300",
        width:"100px",
        _hover: {
            bg:"none",
            color:"#a27d2f"
        }
    }
    return (
        <Flex as="header" p='3'>
      <Flex py="2" w='100%' px="8" alignItems="center" bg="#000" borderRadius="12" border='none' backdropFilter="blur(10px)">
        <Text fontSize="xl" fontWeight="300" color="#cbaa46">WIZARD WORLD</Text>
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
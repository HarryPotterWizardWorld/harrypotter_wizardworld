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
      <Flex py="2" w='100%' px="8" alignItems="center" bg="rgba(150, 150, 150, 0.155)" borderRadius="12" border='none' backdropFilter="blur(10px)">
        <Text fontSize="xl" fontWeight="300" color="white">WIZARD WORLD</Text>
        <Spacer />
        <Flex justifyContent='end'>
          <Button {...buttonHeader}>Shop All</Button>
          <Button {...buttonHeader}>
            <Link href="/About" passHref>
              About Us
            </Link>
          </Button>
          <Button {...buttonHeader}>New</Button>
          <Menu isLazy>
            <MenuButton {...buttonHeader} px='16px'>More</MenuButton>
            <MenuList>
              {/* MenuItems are not rendered unless Menu is open */}
              <MenuItem bg='none'>New Window</MenuItem>
              <MenuItem bg='none'>Open Closed Tab</MenuItem>
              <MenuItem bg='none'>Open File</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      </Flex>
    )
}
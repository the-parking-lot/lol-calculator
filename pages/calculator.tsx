import {
  Box,
  Flex,
  Heading,
  HStack,
  Spacer,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
// import clientPromise from '../lib/mongodb';
// const clientPromise = require('../lib/mongodb')

const calculator = ({ items, champions } : { items: any, champions: any}) => {
  const itemData = Object.keys(items['data'])
  const championData = Object.keys(champions['data'])

  return (
    <>
      <Box>
        <Flex>
          <Flex w="100%" mt={2} h={400}>
            <Box 
              py={2}
              maxW="75%"
              w="75%"
              borderRadius="5px"
              ml={2}
              mr={1}
            >
              <Heading
                size='md'
                ml={3}
              >Champion Info</Heading>
            </Box>
            <Box 
              borderRadius="5px"
              py={2}
              maxW="25%"
              w="25%"
              ml={1}
              mr={2}
            >
              <Heading
                size='md'
                ml={3}
              >Champions List</Heading>
              <Box>
                {championData}
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export const getStaticProps = async () => {
  const resItems = await fetch('http://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/item.json')
  const items = await resItems.json()

  const resChampions = await fetch('https://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/championFull.json')
  const champions = await resChampions.json()

  return {
    props: { items, champions },
    revalidate: 100000,
  }
}

export default calculator
  
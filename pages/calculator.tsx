import {
  Box,
  Flex,
  Heading,
  HStack,
  Spacer,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import Runes from '../components/Runes';
import { useEffect, useState } from 'react';
import ChampStats from '../components/ChampStats';
import ChampsList from '../components/ChampsList';

const Calculator = ({ items, champions } : { items: any, champions: any}) => {
  const itemData = Object.keys(items['data'])
  const championData = Object.keys(champions['data'])

  const [Champion, setChampion] = useState<String>("")

  return (
    <>
      <Box>
        <Flex direction={'column'} alignItems={'center'} mb={100} > 
          <Flex w="100%" mt={2} h={800}>
            <ChampStats {...Champion}></ChampStats>
            <ChampsList {...championData}></ChampsList>
          </Flex>
          <Runes></Runes>
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

export default Calculator
  
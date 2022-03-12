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
import { FC, useEffect, useState } from 'react';
import ChampStats from '../components/ChampStats';
import ChampsList from '../components/ChampsList';

interface CalculatorProps {
  items: any;
  champions: any;
}

const Calculator:FC<CalculatorProps> = (props) => {
  const itemData = Object.keys(props.items['data'])

  const [Champion, setChampion] = useState<string>("none")

  return (
    <>
      <Box>
        <Flex direction={'column'} alignItems={'center'} mb={100} > 
          <Flex w="100%" mt={2}>
            <ChampStats selected={Champion} ></ChampStats>
            <ChampsList champs={props.champions['data']} selectChamp={setChampion}></ChampsList>
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
  
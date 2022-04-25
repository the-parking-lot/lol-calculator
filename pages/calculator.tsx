import {
  Box,
  Flex,
  Heading,
  HStack,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import Runes from '../components/Runes';
import { useEffect, useState } from 'react';
import ChampStats from '../components/ChampStats';
import ChampsList from '../components/ChampsList';
import Items from '../components/Items';

const Calculator = ({ items, champions } : { items: any, champions: any}) => {
  const itemData = Object.keys(items['data'])
  const championData = Object.keys(champions['data'])

  const [Champion, setChampion] = useState<String>("")

  return (
    <>
      <Box>
        <Flex direction={'column'} alignItems={'center'} mb={100} > 
          <Flex w="100%" mt={2}>
            <ChampStats {...Champion}></ChampStats>
            <ChampsList {...championData}></ChampsList>
          </Flex>
          <Tabs isFitted variant='enclosed' w='97%'>
            <TabList>
                <Tab><Heading size="lg" mb={3}>Runes</Heading></Tab>
                <Tab><Heading size="lg" mb={3}>Items</Heading></Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Runes />
                </TabPanel>
                <TabPanel>
                    <Items />
                </TabPanel>
            </TabPanels>
        </Tabs>
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
  
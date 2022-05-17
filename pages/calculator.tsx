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

const Calculator = ({ items, champions, runes } : { items: any, champions: any, runes: any}) => {
  const itemData = Object.keys(items['data'])
  const championData = Object.keys(champions['data'])
  const runeData = runes

  const [Champion, setChampion] = useState<String>("")

  return (
    <>
      <Box>
        <Flex direction={'column'} alignItems={'center'} mb={100} > 
          <Flex w="100%" mt={2}>
            <ChampStats {...Champion}></ChampStats>
            <ChampsList {...championData}></ChampsList>
          </Flex>
          <Flex w="100%" mt={2}>
            <Runes {...runeData}/>
            <Items />
          </Flex>
          {/* <Tabs isFitted variant='enclosed' w='97%'>
            <TabList>
                <Tab><Heading size="lg" mb={3}>Runes</Heading></Tab>
                <Tab><Heading size="lg" mb={3}>Items</Heading></Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Runes {...runeData}/>
                </TabPanel>
                <TabPanel>
                    <Items />
                </TabPanel>
            </TabPanels>
        </Tabs> */}
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

  const resRunes = await fetch('https://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/runesReforged.json')
  const runes = await resRunes.json()

  return {
    props: { items, champions, runes },
    revalidate: 100000,
  }
}

export default Calculator
  
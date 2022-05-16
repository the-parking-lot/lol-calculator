import { Box, Center, Flex, Heading, useColorModeValue, Wrap, WrapItem } from '@chakra-ui/react'
import { useState } from 'react'
import PrimaryKeystone from './runes/primary/PrimaryKeystone';
import PrimaryRowOne from './runes/primary/PrimaryRowOne';
import PrimaryRowTwo from './runes/primary/PrimaryRowTwo';
import PrimaryRowThree from './runes/primary/PrimaryRowThree';
import PrimaryRune from './runes/primary/PrimaryRune'
import SecondaryRune from './runes/secondary/SecondaryRune';
import SecondaryRowOne from './runes/secondary/SecondaryRowOne';
import SecondaryRowTwo from './runes/secondary/SecondaryRowTwo';
import SecondaryRowThree from './runes/secondary/SecondaryRowThree';

const setLesserRunes = (rune : string) => {
  let keystones: string[] = [];
  let rowOne: string[] = [];
  let rowTwo: string[] = [];
  let rowThree: string[] = [];

  switch (rune) {
    case "Precision":
      keystones = PrecisionKeystones;
      rowOne = PrecisionRowOne;
      rowTwo = PrecisionRowTwo;
      rowThree = PrecisionRowThree;
      break;
    case "Domination":
      keystones = DominationKeystones;
      rowOne = DominationRowOne;
      rowTwo = DominationRowTwo;
      rowThree = DominationRowThree;
      break;
    case "Sorcery":
      keystones = SorceryKeystones;
      rowOne = SorceryRowOne;
      rowTwo = SorceryRowTwo;
      rowThree = SorceryRowThree;
      break;
    case "Resolve":
      keystones = ResolveKeystones;
      rowOne = ResolveRowOne;
      rowTwo = ResolveRowTwo;
      rowThree = ResolveRowThree;
      break;
    case "Inspiration":
      keystones = InspirationKeystones;
      rowOne = InspirationRowOne;
      rowTwo = InspirationRowTwo;
      rowThree = InspirationRowThree;
      break;
  }

  return [keystones, rowOne, rowTwo, rowThree];
}

export type runeType = {
  id: number,
  key: string,
  icon: string,
  name: string,
  shortDesc: string,
  longDesc: string,
}

type slotType = {
  runes: runeType[]
}

type pathType = {
  id: number,
  key: string,
  icon: string,
  name: string,
  slots: slotType[],
}

const setRunesInfo = (runes: pathType[], rune: string) => {
  let runeInfo: slotType[] = [];
  switch (rune) {
    case "Precision":
      runeInfo = runes[2]["slots"];
      break;
    case "Domination":
      runeInfo = runes[0]["slots"];
      break;
    case "Sorcery":
      runeInfo = runes[4]["slots"];
      break;
    case "Resolve":
      runeInfo = runes[3]["slots"];
      break;
    case "Inspiration":
      runeInfo = runes[1]["slots"];
      break;
  }
  return runeInfo;
}

const Runes = ( runes: pathType[] ) => {
  const paths = ["Precision", "Domination", "Sorcery", "Resolve", "Inspiration"]

  const [primary, setPrimary] = useState<string>("");
  const [primaryKeystone, setPrimaryKeystone] = useState<string>("");
  const [primaryRowOne, setPrimaryRowOne] = useState<string>("");
  const [primaryRowTwo, setPrimaryRowTwo] = useState<string>("");
  const [primaryRowThree, setPrimaryRowThree] = useState<string>("");

  const [secondary, setSecondary] = useState<string>("");
  const [secondaryRunes, setSecondaryRunes] = useState<string[]>([]);

  const primaryLesserRunes = setLesserRunes(primary);
  const primaryRunesInfo = setRunesInfo(runes, primary);

  const secondaryLesserRunes = setLesserRunes(secondary);
  const secondaryRunesInfo = setRunesInfo(runes, secondary);
  console.log(secondaryRunes)

  return (
    <Box bg={useColorModeValue('gray.200', 'gray.700')} p={4} minW={500} w="100%" borderRadius={5} alignItems={"center"} textAlign={"center"} >
      <Flex w="100%" h={625} my={4} direction={"row"}>
        <Box bg={useColorModeValue('white', 'gray.800')} flex='1' h="100%" borderRadius={5} mx={5} flexDir='column'>
          <Heading size="md" m={3}>Primary</Heading>
          <Center>
            <Wrap>
              {paths.map((rune) => {
                return (
                  <WrapItem key={rune}>
                    <PrimaryRune
                      setPrimary={setPrimary}
                      setPrimaryKeystone={setPrimaryKeystone}
                      setPrimaryRowOne={setPrimaryRowOne}
                      setPrimaryRowTwo={setPrimaryRowTwo}
                      setPrimaryRowThree={setPrimaryRowThree}
                      setSecondary={setSecondary}
                      setSecondaryRunes={setSecondaryRunes}
                      rune={primary}
                      >{rune}</PrimaryRune>
                  </WrapItem>
                )
              })}
            </Wrap>
          </Center>
          <Center>
            <Wrap>
              {primaryLesserRunes[0].map((keystone, index) => {
                return (
                  <WrapItem key={keystone}>
                    <PrimaryKeystone
                      setPrimaryKeystone={setPrimaryKeystone}
                      rune={primary}
                      keystone={primaryKeystone}
                      runesInfo={primaryRunesInfo[0]["runes"]}
                      index={index}
                    >{keystone}</PrimaryKeystone>
                  </WrapItem>
                )
              })}
            </Wrap>
          </Center>
          <Center>
            <Wrap>
              {primaryLesserRunes[1].map((lesserRune, index) => {
                return (
                  <WrapItem key={lesserRune}>
                    <PrimaryRowOne
                      setPrimaryRowOne={setPrimaryRowOne}
                      rune={primary}
                      lesserRune={primaryRowOne}
                      runesInfo={primaryRunesInfo[1]["runes"]}
                      index={index}
                    >{lesserRune}</PrimaryRowOne>
                  </WrapItem>
                )
              })}
            </Wrap>
          </Center>
          <Center>
            <Wrap>
              {primaryLesserRunes[2].map((lesserRune, index) => {
                return ( 
                  <WrapItem key={lesserRune}>
                    <PrimaryRowTwo 
                      setPrimaryRowTwo={setPrimaryRowTwo}
                      rune={primary}
                      lesserRune={primaryRowTwo}
                      runesInfo={primaryRunesInfo[2]["runes"]}
                      index={index}
                    >{lesserRune}</PrimaryRowTwo>
                  </WrapItem>
                )
              })}
            </Wrap>
          </Center>
          <Center>
            <Wrap>
              {primaryLesserRunes[3].map((lesserRune, index) => {
                return (
                  <WrapItem key={lesserRune}>
                    <PrimaryRowThree
                      setPrimaryRowThree={setPrimaryRowThree}
                      rune={primary}
                      lesserRune={primaryRowThree}
                      runesInfo={primaryRunesInfo[3]["runes"]}
                      index={index}
                    >{lesserRune}</PrimaryRowThree>
                  </WrapItem>
                )
              })}
            </Wrap>
          </Center>
        </Box>
        <Box bg={useColorModeValue('white', 'gray.800')} flex='1' h="100%" borderRadius={5} mx={5}>
          <Heading size="md" m={3}> Secondary</Heading>
          <Center>
            <Wrap>
              {paths.map((rune) => {
                return ( rune !== primary && primary !== "" &&
                  <WrapItem key={rune}>
                    <SecondaryRune
                      setSecondary={setSecondary}
                      setSecondaryRunes={setSecondaryRunes}
                      secondary={secondary}
                      >{rune}</SecondaryRune>
                  </WrapItem>
                )
              })}
            </Wrap>
          </Center>
          <Center>
            <Wrap>
              {secondaryLesserRunes[1].map((lesserRune, index) => {
                return (
                  <WrapItem key={lesserRune}>
                    <SecondaryRowOne
                      setSecondaryRunes={setSecondaryRunes}
                      secondaryRunes={secondaryRunes}
                      rune={secondary}
                      lesserRune={secondaryRunes}
                      runesInfo={secondaryRunesInfo[1]["runes"]}
                      runesList={secondaryLesserRunes[1]}
                      index={index}
                    >{lesserRune}</SecondaryRowOne>
                  </WrapItem>
                )
              })}
            </Wrap>
          </Center>
          <Center>
            <Wrap>
              {secondaryLesserRunes[2].map((lesserRune, index) => {
                return ( 
                  <WrapItem key={lesserRune}>
                    <SecondaryRowTwo 
                      setSecondaryRunes={setSecondaryRunes}
                      secondaryRunes={secondaryRunes}
                      rune={secondary}
                      lesserRune={secondaryRunes}
                      runesInfo={secondaryRunesInfo[2]["runes"]}
                      runesList={secondaryLesserRunes[2]}
                      index={index}
                    >{lesserRune}</SecondaryRowTwo>
                  </WrapItem>
                )
              })}
            </Wrap>
          </Center>
          <Center>
            <Wrap>
              {secondaryLesserRunes[3].map((lesserRune, index) => {
                return (
                  <WrapItem key={lesserRune}>
                    <SecondaryRowThree
                      setSecondaryRunes={setSecondaryRunes}
                      secondaryRunes={secondaryRunes}
                      rune={secondary}
                      lesserRune={secondaryRunes}
                      runesInfo={secondaryRunesInfo[3]["runes"]}
                      runesList={secondaryLesserRunes[3]}
                      index={index}
                    >{lesserRune}</SecondaryRowThree>
                  </WrapItem>
                )
              })}
            </Wrap>
          </Center>
        </Box>
        <Box bg={useColorModeValue('white', 'gray.800')} flex='1' h="100%" borderRadius={5} mx={5}>
          <Heading size="md" m={3}> Shards</Heading>
        </Box>
      </Flex>
    </Box>
  )
}

const PrecisionKeystones = [
  "PressTheAttack",
  "LethalTempo",
  "FleetFootwork",
  "Conqueror",
]

const PrecisionRowOne = [
  "Overheal",
  "Triumph",
  "PresenceOfMind",
]

const PrecisionRowTwo = [
  "LegendAlacrity",
  "LegendTenacity",
  "LegendBloodline",
]

const PrecisionRowThree = [
  "CoupDeGrace",
  "CutDown",
  "LastStand",
]

const DominationKeystones = [
  "Electrocute",
  "Predator",
  "DarkHarvest",
  "HailOfBlades",
]

const DominationRowOne = [
  "CheapShot",
  "TasteOfBlood",
  "SuddenImpact",
]

const DominationRowTwo = [
  "ZombieWard",
  "GhostPoro",
  "EyeballCollection",
]

const DominationRowThree = [
  "RavenousHunter",
  "IngeniousHunter",
  "RelentlessHunter",
  "UltimateHunter",
]

const SorceryKeystones = [
  "SummonAery",
  "ArcaneComet",
  "PhaseRush",
]

const SorceryRowOne = [
  "NullifyingOrb",
  "ManaflowBand",
  "NimbusCloak",
]

const SorceryRowTwo = [
  "Transcendence",
  "Celerity",
  "AbsoluteFocus",
]

const SorceryRowThree = [
  "Scorch",
  "Waterwalking",
  "GatheringStorm",
]

const ResolveKeystones = [
  "GraspOfTheUndying",
  "Aftershock",
  "Guardian",
]

const ResolveRowOne = [
  "Demolish",
  "FontOfLife",
  "ShieldBash",
]

const ResolveRowTwo = [
  "Conditioning",
  "SecondWind",
  "BonePlating",
]

const ResolveRowThree = [
  "Overgrowth",
  "Revitalize",
  "Unflinching",
]

const InspirationKeystones = [
  "GlacialAugment",
  "UnsealedSpellbook",
  "FirstStrike",
]

const InspirationRowOne = [
  "HextechFlashtraption",
  "MagicalFootwear",
  "PerfectTiming",
]

const InspirationRowTwo = [
  "FuturesMarket",
  "MinionDematerializer",
  "BiscuitDelivery",
]

const InspirationRowThree = [
  "CosmicInsight",
  "ApproachVelocity",
  "TimeWarpTonic",
]

export default Runes
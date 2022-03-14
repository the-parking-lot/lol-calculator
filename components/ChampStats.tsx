import { Box, Heading, useColorModeValue } from "@chakra-ui/react"
import Image from 'next/image';
import { FC } from "react";
import { toImageName } from "./ChampsList";

interface ChampStatsProps {
  champsData: {};
  selected: string;
}

const ChampStats:FC<ChampStatsProps> = ( props ) => {
  let selectedChamp: string = props.selected;

  return (
    <Box 
      bg={useColorModeValue('gray.200', 'gray.700')}
      p={4}
      m={8}
      minW={350}
      maxW="100%"
      w="75%"
      borderRadius="5px"
    >
      <Heading
        size='md'
        ml={3}
      >Champion Info</Heading>
      <Box>
        Selected Champion is {selectedChamp}
      </Box>
      <Image 
      src={toImageName(selectedChamp, props.champsData)}
      width={450}
      height={450}
      alt={`${selectedChamp}`}/>
    </Box>
  )
}

export default ChampStats
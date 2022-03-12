import { SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Input, InputGroup, InputLeftElement, useColorModeValue } from "@chakra-ui/react";
import Image from 'next/image'
import React, { Dispatch, FC, SetStateAction, useEffect } from "react";
import getStaticProps from '../pages/calculator';

interface ChampProps {
  champion: string;
  champsData: {};
  selectChamp: Dispatch<SetStateAction<string>>;
}

const ChampionCard:FC<ChampProps> = (props) => {
 return (
  <Button 
    h={55}
    minW={150}
    w="100%"
    mr={-5}
    mt={2}
    justifyContent="left"
    onClick={() => {props.selectChamp(props.champion)}}
    >
    <Image 
      src={toImageName(props.champion, props.champsData)}
      width={50}
      height={50}
      alt={`${props.champion}`}/>
    <Box
      borderRadius="5px"
      py={2}
      ml={1}
      mr={2}
    >
    {props.champion}
    </Box>
  </Button>
)}

export const toImageName = ( name: string, champsData: {} ) => {
  let imageName:string = "";
  for ( const champ of Object.values(champsData) as any) {
    if (champ["name"] == name) {
      imageName = champ["id"];
    }
  }
  return "/../public/champ_icons/" + imageName + ".png"
}


interface ChampListProps {
  champsData: any;
  selectChamp: Dispatch<SetStateAction<string>>;
}

const ChampsList:FC<ChampListProps> = (props) => {

  // champNames: The actual names of the champions
  let champNames: string[] = []
  for ( const info of Object.values(props.champsData) as any) {
    champNames.push(info["name"]);
  }

  const [search, setSearch] = React.useState<string>("");

  const handleSearch = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
  }
  
  let champSearch = champNames.filter(champ => {
    let str = search.valueOf().toLowerCase();
    return str == "" ? champ : champ.toLowerCase().includes(str);
  }).sort()

  return (
  <Box
    bg={useColorModeValue('gray.200', 'gray.700')}
    borderRadius="5px"
    p={4}
    mr={8}
    my={8}
    minW={250}
    maxW="25%"
    w="25%"
  >
    <Heading
      size='md'
      mb={3}
    >Champions List
    </Heading>
    <InputGroup mb={2}>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input onChange={(e) => handleSearch(e)} type="champion" placeholder="Champion Name" />
    </InputGroup>
    <Box
      borderRadius="5px"
      py={2}
      minW={200}
      ml={1}
      mr={2}
      h={450}
      overflowY="scroll"
    >
    {champSearch.map(champ => (
      <ChampionCard 
        key={champ}
        champion={champ}
        champsData={props.champsData}
        selectChamp={props.selectChamp}
        >
        {champ}
      </ChampionCard>
    ))}
    </Box>
  </Box>
  );
};


export default ChampsList
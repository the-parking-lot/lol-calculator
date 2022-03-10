import { SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Input, InputGroup, InputLeftElement, useColorModeValue } from "@chakra-ui/react";
import Image from 'next/image'
import React, { useEffect } from "react";

const Champ = ({ children }: { children: String }) => {
 return (
  <Button h={55} minW={150} w="100%" mr={-5} mt={2} textAlign={"left"}>
    
    <Image 
      src={toImageName(children)}
      width={50}
      height={50}
      alt={`${children}`} />
    <Box
      borderRadius="5px"
      py={2}
      ml={1}
      mr={2}
    >
    {children}
    </Box>
  </Button>
)}

const toImageName = ( name: String ) => {
  let imageName:String = "";
  for ( const champ of Object.values(data) as any) {
    if (champ["name"] == name) {
      imageName = champ["id"];
    }
  }
  return "/../public/champ_icons/" + imageName + ".png"
}

let data = {};

const ChampsList = ({ champs, selectChamp }: { champs: any, selectChamp: any } ) => {
  data = champs;

  selectChamp("test")

  // champNames: The actual names of the champions
  let champNames: String[] = []
  for ( const info of Object.values(champs) as any) {
    champNames.push(info["name"]);
  }

  const [search, setSearch] = React.useState<String>("");

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
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
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
    {champSearch.map((champ) => (
      <Champ {...champs} >{champ}</Champ>
      ))}
    </Box>
  </Box>
  );
};


export default ChampsList
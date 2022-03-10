import { Box, Flex, Heading, Stack, useColorModeValue } from "@chakra-ui/react";
import Image from 'next/image'

const Champ = ({ children }: { children: String }) => {
 return (
  <Flex minW={150} w={150} maxW={300} textAlign={"center"} >
    <Image 
      src={`/../public/champ_icons/${children}.png`}
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
  </Flex>
  
)}

const ChampsList = ( champs: string[] ) => {
  const champList = Object.values(champs);
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
      <Box
        borderRadius="5px"
        py={2}
        minW={200}
        ml={1}
        mr={2}
        h={400}
        overflowY="scroll"
      >
      {champList.map((champ) => (
        <Champ key={champ}>{champ}</Champ>
      ))}
    </Box>
  </Box>
  );
};

export default ChampsList
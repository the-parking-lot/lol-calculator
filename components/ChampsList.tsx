import { Box, Flex, Heading, Stack } from "@chakra-ui/react";

const ChampsList = ( champs: string[] ) => {
  let s = ""
  Object.values(champs).map(champ => {
    console.log(champ)
    s += '<Box>' + champ + '</Box>'
  })

  return (
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
  >
    Champions List
  </Heading>
    <Box
      borderRadius="5px"
      py={2}
      maxW="100%"
      w="100%"
      ml={1}
      mr={2}
      h={400}
      overflowY="scroll"
    >
      {Object.values(champs).map(champ =>
        <Box
          borderRadius="5px"
          py={2}
          maxW={300}
          w={300}
          ml={1}
          mr={2}
        >
          {champ}
        </Box>
      )}
    </Box>
  </Box>
  );
};

export default ChampsList
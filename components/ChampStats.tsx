import { Box, Heading, useColorModeValue } from "@chakra-ui/react"

const ChampStats = ({ selected }: { selected: String }) => {
  let selectedChamp: String = selected;

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
    </Box>
  )
}

export default ChampStats
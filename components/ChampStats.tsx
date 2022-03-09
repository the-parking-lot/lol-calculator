import { Box, Heading } from "@chakra-ui/react"

const ChampStats = ( Champion: String) => {

  let selectedChamp: String = "None";

  console.log(Champion)

  return (
    <Box 
      py={2}
      maxW="75%"
      w="75%"
      borderRadius="5px"
      ml={2}
      mr={1}
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
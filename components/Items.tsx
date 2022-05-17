import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react"

const Items = () => {
  return (
    <>
      <Box 
        bg={useColorModeValue('gray.200', 'gray.700')}
        p={4}
        my={8}
        mr={8}
        minW={350}
        maxW="100%"
        w="50%"
        borderRadius={5}
        alignItems={"center"}
        textAlign={"center"}
      >
        <Text fontSize="3xl" fontWeight="bold">Items</Text>
        <Flex w="100%" h={625} my={4} direction={"row"}>
          
        </Flex>
      </Box>
    </>
  )
}

export default Items
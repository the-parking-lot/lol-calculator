import {
  Box,
  Flex,
  Heading,
  HStack,
  Spacer,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

const calculator = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box>
        <Flex>
          <Flex w="100%" mt={2} h={400}>
            <Box 
              bg={useColorModeValue('gray.100', 'gray.900')}
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
            </Box>
            <Box 
              bg={useColorModeValue('gray.100', 'gray.900')}
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
              >Champions List</Heading>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default calculator
  
import { Box, Flex, Heading, Spacer, useColorMode, useColorModeValue, useDisclosure } from '@chakra-ui/react'

const Runes = () => {
    return (
        <Box bg={useColorModeValue('gray.200', 'gray.700')} minW={500} w="96.6%" mx={10} borderRadius={5} textAlign={"center"} >
            <Heading size="lg" mb={3}>Runes</Heading>
            <Flex w="100%" h={675} my={4} direction={"row"}>
                <Box bg={useColorModeValue('white', 'gray.800')} flex='1' h="100%" borderRadius={5} mx={5}>
                    <Heading size="md" m={3}> Primary</Heading>
                </Box>
                <Box bg={useColorModeValue('white', 'gray.800')} flex='1' h="100%" borderRadius={5} mx={5}>
                    <Heading size="md" m={3}> Secondary</Heading>
                </Box>
                <Box bg={useColorModeValue('white', 'gray.800')} flex='1' h="100%" borderRadius={5} mx={5}>
                    <Heading size="md" m={3}> Shards</Heading>
                </Box>
            </Flex>
        </Box>
    )
}

export default Runes
import { Box, Center, Flex, Heading, Spacer, useColorMode, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import PrimaryRunesList from './primary/PrimaryRunesList'

const Runes = () => {
    const [primary, setPrimary] = useState<string>("");
    const [secondary, setSecondary] = useState<string>("");
    return (
        <Center>
            <Box bg={useColorModeValue('gray.200', 'gray.700')} p={4} minW={500} w="100%" borderRadius={5} alignItems={"center"} textAlign={"center"} >
                <Flex w="100%" h={675} my={4} direction={"row"}>
                    <Box bg={useColorModeValue('white', 'gray.800')} flex='1' h="100%" borderRadius={5} mx={5} flexDir='column'>
                        <Heading size="md" m={3}>Primary</Heading>
                        <Center>
                            <PrimaryRunesList primary={primary} setPrimary={setPrimary} />
                        </Center>
                    </Box>
                    <Box bg={useColorModeValue('white', 'gray.800')} flex='1' h="100%" borderRadius={5} mx={5}>
                        <Heading size="md" m={5}> Secondary</Heading>
                    </Box>
                    <Box bg={useColorModeValue('white', 'gray.800')} flex='1' h="100%" borderRadius={5} mx={5}>
                        <Heading size="md" m={5}> Shards</Heading>
                    </Box>
                </Flex>
            </Box>
        </Center>
    )
}

export default Runes
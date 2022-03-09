import { Box, Flex, Heading, useColorMode, useColorModeValue, useDisclosure } from '@chakra-ui/react'

const Runes = () => {
    return (
        <Flex w="94%" height={800}>
            <Box bg={useColorModeValue('gray.200', 'gray.700')} px={4} w="100%" height="100%" borderRadius={25}>
                <Heading size="lg" mx={3} my={6}>Runes</Heading>
                <Flex w={1750} height={675} mt={2}>
                    <Box bg={useColorModeValue('white', 'gray.800')} px={4} w="33%" height="100%" borderRadius={25} mx={5}>
                        <Heading size="md" mx={3} my={3}> Primary</Heading>
                    </Box>
                    <Box bg={useColorModeValue('white', 'gray.800')} px={4} w="33%" height="100%" borderRadius={25} mx={5}>
                        <Heading size="md" mx={3} my={3}> Secondary</Heading>
                    </Box>
                    <Box bg={useColorModeValue('white', 'gray.800')} px={4} w="33%" height="100%" borderRadius={25} mx={5}>
                        <Heading size="md" mx={3} my={3}> Shards</Heading>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Runes
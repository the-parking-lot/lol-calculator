import {
  Box,
  useColorModeValue,
} from '@chakra-ui/react';

const index = () => {
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      </Box>
    </>
  )
}

export default index

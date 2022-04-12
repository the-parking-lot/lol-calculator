import { Box, Divider, Flex, StackDivider, VStack } from '@chakra-ui/react';
import React, { Dispatch, SetStateAction } from 'react'
import PrecisionFirstRow from './precision/PrecisionFirstRow';
import PrecisionKeystone from './precision/PrecisionKeystone';
import PrecisionSecondRow from './precision/PrecisionSecondRow';
import PrecisionThirdRow from './precision/PrecisionThirdRow';
import PrimaryRune from './PrimaryRune';

interface PrimaryProps {
  primary: string;
  setPrimary: Dispatch<SetStateAction<string>>;
}

const PrimaryRunesList = (props: PrimaryProps) => {
  return (
    <VStack
      divider={<StackDivider borderColor='gray.500' />}
      w='90%'
      h='600px'
      justifyContent='space-evenly'
    >
      <PrimaryRune setPrimary={props.setPrimary} />
      <PrecisionKeystone primary={props.primary} />
      <PrecisionFirstRow primary={props.primary} />
      <PrecisionSecondRow primary={props.primary} />
      <PrecisionThirdRow primary={props.primary} />
    </VStack>
  )
}

export default PrimaryRunesList
import { Box, Flex, IconButton } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'

interface PrecisionProps {
  primary: string;
}

const PrecisionThirdRow = (props: PrecisionProps) => {
  return ((props.primary === "precision" &&
    <Box w='100%'>
      <Flex justifyContent='space-evenly'>
        <IconButton aria-label='coup de grace' icon={
          <Image 
            src={'/../public/rune_icons/Precision/CoupDeGrace/CoupDeGrace.png'}
            width={55}
            height={55}
            alt={'Coup De Grace'} />}
          variant='ghost'
          size='lg' />
        <IconButton aria-label='cut down' icon={
          <Image 
            src={'/../public/rune_icons/Precision/CutDown/CutDown.png'}
            width={55}
            height={55}
            alt={'Cut Down'} />}
          variant='ghost'
          size='lg' />
        <IconButton aria-label='last stand' icon={
          <Image 
            src={'/../public/rune_icons/Precision/LastStand/LastStand.png'}
            width={55}
            height={55}
            alt={'Last Stand'} />}
          variant='ghost'
          size='lg' />
      </Flex>
    </Box>)
    || <></>
  )
}

export default PrecisionThirdRow
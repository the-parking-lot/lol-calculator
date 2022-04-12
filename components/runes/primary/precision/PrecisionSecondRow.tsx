import { Box, Flex, IconButton } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'

interface PrecisionProps {
  primary: string;
}

const PrecisionSecondRow = (props: PrecisionProps) => {
  return ((props.primary === "precision" &&
    <Box w='100%'>
      <Flex justifyContent='space-evenly'>
        <IconButton aria-label='legend alacrity' icon={
          <Image 
            src={'/../public/rune_icons/Precision/LegendAlacrity/LegendAlacrity.png'}
            width={55}
            height={55}
            alt={'Legend: Alacrity'} />}
          variant='ghost'
          size='lg' />
        <IconButton aria-label='legend tenacity' icon={
          <Image 
            src={'/../public/rune_icons/Precision/LegendTenacity/LegendTenacity.png'}
            width={55}
            height={55}
            alt={'Legend: Tenacity'} />}
          variant='ghost'
          size='lg' />
        <IconButton aria-label='legend bloodline' icon={
          <Image 
            src={'/../public/rune_icons/Precision/LegendBloodline/LegendBloodline.png'}
            width={55}
            height={55}
            alt={'Legend: Bloodline'} />}
          variant='ghost'
          size='lg' />
      </Flex>
    </Box>)
    || <></>
  )
}

export default PrecisionSecondRow
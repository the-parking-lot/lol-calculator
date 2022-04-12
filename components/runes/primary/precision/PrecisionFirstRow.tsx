import { Box, Flex, IconButton } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'

interface PrecisionProps {
  primary: string;
}

const PrecisionFirstRow = (props: PrecisionProps) => {
  return ((props.primary === "precision" &&
    <Box w='100%'>
      <Flex justifyContent='space-evenly'>
        <IconButton aria-label='overheal' icon={
          <Image 
            src={'/../public/rune_icons/Precision/Overheal.png'}
            width={55}
            height={55}
            alt={'Overheal'} />}
          variant='ghost'
          size='lg' />
        <IconButton aria-label='triumph' icon={
          <Image 
            src={'/../public/rune_icons/Precision/Triumph.png'}
            width={55}
            height={55}
            alt={'Triumph'} />}
          variant='ghost'
          size='lg' />
        <IconButton aria-label='presence of mind' icon={
          <Image 
            src={'/../public/rune_icons/Precision/PresenceOfMind/PresenceOfMind.png'}
            width={55}
            height={55}
            alt={'Presence Of Mind'} />}
          variant='ghost'
          size='lg' />
      </Flex>
    </Box>)
    || <></>
  )
}

export default PrecisionFirstRow
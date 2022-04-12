import { Box, Flex, IconButton } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'

interface PrecisionProps {
  primary: string;
}

const PrecisionKeystone = (props: PrecisionProps) => {
  return ((props.primary === "precision" &&
    <Box w='100%'>
      <Flex justifyContent='space-evenly'>
        <IconButton aria-label='press the attack' icon={
          <Image 
            src={'/../public/rune_icons/Precision/PressTheAttack/PressTheAttack.png'}
            width={75}
            height={75}
            alt={'Press the Attach'} />}
          variant='ghost'
          size='lg' />
          <IconButton aria-label='lethal tempo' icon={
          <Image 
            src={'/../public/rune_icons/Precision/LethalTempo/LethalTempoTemp.png'}
            width={75}
            height={75}
            alt={'Lethal Tempo'} />}
          variant='ghost'
          size='lg' />
        <IconButton aria-label='fleet footwork' icon={
          <Image 
            src={'/../public/rune_icons/Precision/FleetFootwork/FleetFootwork.png'}
            width={75}
            height={75}
            alt={'Fleet Footwork'} />}
          variant='ghost'
          size='lg' />
        <IconButton aria-label='conqueror' icon={
          <Image 
            src={'/../public/rune_icons/Precision/Conqueror/Conqueror.png'}
            width={75}
            height={75}
            alt={'Conqueror'} />}
          variant='ghost'
          size='lg' />
      </Flex>
    </Box>)
    || <></>
  )
}

export default PrecisionKeystone
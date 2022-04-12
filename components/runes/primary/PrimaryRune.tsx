import { Box, Flex, IconButton } from '@chakra-ui/react'
import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'

interface PrimaryProps {
  setPrimary: Dispatch<SetStateAction<string>>;
}

const PrimaryRune = (props: PrimaryProps) => {
  return (
    <Box w='100%' mt='15px'>
      <Flex justifyContent='space-evenly'>
        <IconButton aria-label='precision keystone' icon={
          <Image 
            src={'/../public/rune_icons/7201_Precision.png'}
            width={75}
            height={75}
            alt={'Precision'} />}
          variant='ghost'
          size='lg'
          onClick={() => props.setPrimary("precision")} />
        <IconButton aria-label='domination keystone' icon={
          <Image 
            src={'/../public/rune_icons/7200_Domination.png'}
            width={75}
            height={75}
            alt={'Precision'} />}
          variant='ghost'
          size='lg'
          onClick={() => props.setPrimary("domination")} />
        <IconButton aria-label='sorcery keystone' icon={
          <Image 
            src={'/../public/rune_icons/7202_Sorcery.png'}
            width={75}
            height={75}
            alt={'Precision'} />}
          variant='ghost'
          size='lg'
          onClick={() => props.setPrimary("sorcery")} />
        <IconButton aria-label='resolve keystone' icon={
          <Image 
            src={'/../public/rune_icons/7204_Resolve.png'}
            width={75}
            height={75}
            alt={'Precision'} />}
          variant='ghost'
          size='lg'
          onClick={() => props.setPrimary("resolve")} />
        <IconButton aria-label='inspiration keystone' icon={
          <Image 
            src={'/../public/rune_icons/7203_Whimsy.png'}
            width={75}
            height={75}
            alt={'Precision'} />}
          variant='ghost'
          size='lg'
          onClick={() => props.setPrimary("inspiration")} />
      </Flex>
    </Box>
  )
}

export default PrimaryRune
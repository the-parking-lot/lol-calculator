import { Box, IconButton } from '@chakra-ui/react'
import React, { Dispatch, FC, SetStateAction } from 'react'
import Image from 'next/image'

type RuneProps = {
  setPrimary: Dispatch<SetStateAction<string>>,
  children: any,
}

const Rune = ( { setPrimary, children }: RuneProps ) => {
  return (
    <>
      <IconButton aria-label={`${children}`}
        icon={<Image 
          src={`/../public/rune_icons/${children}.png`}
          width={45}
          height={45}
          alt={`${children}`} />}
        variant='ghost'
        h={55}
        w={55}
        mx={1}
        onClick={() => setPrimary(children)}
        />
    </>
  )
}

export default Rune;
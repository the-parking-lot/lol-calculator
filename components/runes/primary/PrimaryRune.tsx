import { IconButton } from '@chakra-ui/react'
import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { RuneStyle } from '../style'

type RuneProps = {
  setPrimary: Dispatch<SetStateAction<string>>,
  setPrimaryKeystone: Dispatch<SetStateAction<string>>,
  setPrimaryRowOne: Dispatch<SetStateAction<string>>,
  setPrimaryRowTwo: Dispatch<SetStateAction<string>>,
  setPrimaryRowThree: Dispatch<SetStateAction<string>>,
  setSecondary: Dispatch<SetStateAction<string>>,
  setSecondaryRunes: Dispatch<SetStateAction<string[]>>,
  children: any,
  rune: string,
}

const PrimaryRune = ( {
  setPrimary,
  setPrimaryKeystone,
  setPrimaryRowOne,
  setPrimaryRowTwo,
  setPrimaryRowThree,
  setSecondary,
  setSecondaryRunes,
  children,
  rune
}: RuneProps ) => {
  const scale: number = (children === rune || rune === "") ? 0 : 100;
  const handleClick = () => {
    setPrimary(children);
    setPrimaryKeystone("");
    setPrimaryRowOne("");
    setPrimaryRowTwo("");
    setPrimaryRowThree("");
    setSecondary("");
    setSecondaryRunes([]);
  }
  return (
    <>
      <IconButton aria-label={`${children}`}
        icon={<RuneStyle scale={scale}>
          <Image 
            src={`/../public/rune_icons/${children}.png`}
            width={70}
            height={70}
            alt={`${children}`}
          />
        </RuneStyle>}
        variant='ghost'
        h={"7vh"}
        w={"3.5vw"}
        mx={1}
        mt={5}
        mb={10}
        onClick={handleClick}
      />
    </>
  )
}

export default PrimaryRune;
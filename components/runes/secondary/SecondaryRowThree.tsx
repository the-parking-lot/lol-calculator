import { IconButton, Tooltip, useColorModeValue } from '@chakra-ui/react'
import React, { Dispatch, FC, SetStateAction } from 'react'
import Image from 'next/image'
import { RuneStyle } from "../style";
import { runeType } from '../../Runes';
import { ReadableRuneInfo } from '../../../functions/ReadableRuneInfo';

type RuneProps = {
  setSecondaryRunes: Dispatch<SetStateAction<string[]>>,
  secondaryRunes: string[],
  children: any,
  rune: string,
  lesserRune: string[],
  runesInfo: runeType[],
  runesList: string[],
  index: number,
}

const SecondaryRowThree = ( { 
  setSecondaryRunes,
  secondaryRunes,
  children,
  rune,
  lesserRune,
  runesInfo,
  runesList,
  index 
}: RuneProps ) => {
  const scale: number = (lesserRune.includes(children) || lesserRune.length === 0) ? 0 : 100;
  const runeInfo: any = ReadableRuneInfo(runesInfo[index]["longDesc"]);

  const handleClick = () => {
    if (secondaryRunes.length === 0) {
      setSecondaryRunes([children]);
    } else if (secondaryRunes.length === 1) {
      const rune1 = secondaryRunes[0];
      if (!runesList.includes(rune1)) setSecondaryRunes([rune1, children]);
      else setSecondaryRunes([children]);
    } else {
      const rune1 = secondaryRunes[0];
      const rune2 = secondaryRunes[1];
      if (!runesList.includes(rune2)) setSecondaryRunes([rune2, children]);
      else setSecondaryRunes([rune1, children]);
    }
  }

  return (
    <>
      <Tooltip label={runeInfo} aria-label="tooltip" bg={useColorModeValue('gray.200', 'gray.700')} textColor={useColorModeValue('black', 'white')}>
        <IconButton aria-label={`${children}`}
          icon={<RuneStyle scale={scale}>
            <Image 
              src={`/../public/rune_icons/${rune}/${children}/${children}.png`}
              width={55}
              height={55}
              alt={`${children}`}
            />
          </RuneStyle>}
          variant='ghost'
          h={70}
          w={70}
          mx={3}
          mb={10}
          onClick={handleClick}
        />
      </Tooltip>
    </>
  )
}

export default SecondaryRowThree;
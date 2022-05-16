import { IconButton, Tooltip, useColorModeValue } from '@chakra-ui/react'
import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { RuneStyle } from "../style";
import { runeType } from '../../Runes';
import { ReadableRuneInfo } from '../../../functions/ReadableRuneInfo';

type RuneProps = {
  setPrimaryRowTwo: Dispatch<SetStateAction<string>>,
  children: any,
  rune: string,
  lesserRune: string,
  runesInfo: runeType[],
  index: number,
}

const PrimaryRowTwo = ( { setPrimaryRowTwo, children, rune, lesserRune, runesInfo, index }: RuneProps ) => {
  const scale: number = (children === lesserRune || lesserRune === "") ? 0 : 100;
  const runeInfo: any = ReadableRuneInfo(runesInfo[index]["longDesc"]);
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
          onClick={() => setPrimaryRowTwo(children)}
        />
      </Tooltip>
    </>
  )
}

export default PrimaryRowTwo;
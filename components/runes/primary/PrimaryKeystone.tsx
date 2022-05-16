import { IconButton, Tooltip, useColorModeValue } from '@chakra-ui/react'
import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { RuneStyle } from "../style";
import { runeType } from '../../Runes';
import { ReadableRuneInfo } from '../../../functions/ReadableRuneInfo';

type RuneProps = {
  setPrimaryKeystone: Dispatch<SetStateAction<string>>,
  children: any,
  rune: string,
  keystone: string,
  runesInfo: runeType[],
  index: number,
}

const PrimaryKeystone = ( { setPrimaryKeystone, children, rune, keystone, runesInfo, index }: RuneProps ) => {
  const scale: number = (children === keystone || keystone === "") ? 0 : 100;
  const runeInfo: any = ReadableRuneInfo(runesInfo[index]["longDesc"]);
  return (
    <>
      <Tooltip label={runeInfo} aria-label="tooltip" bg={useColorModeValue('gray.200', 'gray.700')} textColor={useColorModeValue('black', 'white')}>
        <IconButton aria-label={`${children.key}`}
          icon={<RuneStyle scale={scale}>
            <Image 
              src={`/../public/rune_icons/${rune}/${children}/${children}.png`}
              width={70}
              height={70}
              alt={`${children}`}
            />
          </RuneStyle>}
          variant='ghost'
          h={70}
          w={70}
          mx={3}
          mb={10}
          onClick={() => setPrimaryKeystone(children)}
        />
      </Tooltip>
    </>
  )
}

export default PrimaryKeystone;
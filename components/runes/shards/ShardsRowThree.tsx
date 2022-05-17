import { IconButton } from '@chakra-ui/react'
import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { RuneStyle } from "../style";

type ShardProps = {
  setShardsRowThree: Dispatch<SetStateAction<string>>,
  children: any,
  shard: string,
}

const ShardsRowThree = ( { setShardsRowThree, children, shard }: ShardProps ) => {
  const scale: number = (children === shard || shard === "") ? 0 : 100;
  return (
    <>
      <IconButton aria-label={`${children}`}
        icon={<RuneStyle scale={scale}>
          <Image 
            src={`/../public/stat_icons/StatMods${children}Icon.png`}
            width={35}
            height={35}
            alt={`${children}`}
          />
        </RuneStyle>}
        variant='ghost'
        h={35}
        w={35}
        mx={3}
        mb={5}
        onClick={() => setShardsRowThree(children)}
      />
    </>
  )
}

export default ShardsRowThree;
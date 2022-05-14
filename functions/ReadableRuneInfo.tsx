import { Text } from "@chakra-ui/react";
import parse from "html-react-parser";

export const ReadableRuneInfo = (runeInfo: string) => {
  return (
    <>
      <Text>{parse(runeInfo)}</Text>
    </>
  );
}
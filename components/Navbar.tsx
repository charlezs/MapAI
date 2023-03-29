import {
  Avatar,
  Box,
  BoxProps,
  Image,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  WrapItem,
  Center,
  Text,
  Button,
  Heading,
  Icon,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { BsFillPinMapFill } from "react-icons/bs";

export const Navigation = () => {
  return (
    <>
      <Box as="header">
        <Box borderBottomWidth="1px" px="4" bg="bg-surface">
          <Center>
            <Flex
              align="center"
              justify="space-between"
              height="4.5rem"
              width="6xl"
            >
              <NextLink href="/">
                <Heading>MapAi</Heading>
              </NextLink>
              <Icon boxSize={6} as={BsFillPinMapFill} />
            </Flex>
          </Center>
        </Box>
      </Box>
    </>
  );
};

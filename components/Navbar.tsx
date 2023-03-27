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
import { AnchorHTMLAttributes, SVGAttributes, useRef } from "react";
import NextLink from "next/link";

import { BsFillPinMapFill } from "react-icons/bs";
const HamburgerIcon = (props: SVGAttributes<SVGSVGElement>) => (
  <svg
    viewBox="0 0 80 62"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M80 0H0V6H80V0Z"></path>
    <path d="M80 28H0V34H80V28Z"></path>
    <path d="M80 56H0V62H80V56Z"></path>
  </svg>
);

const NavItem = (props: BoxProps & AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <Box as="a" href="#" fontSize="sm" {...props} />
);

export const Navigation = () => {
  const nav = useDisclosure();
  const ref = useRef<HTMLDivElement>(null);
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

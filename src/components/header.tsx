import { Flex, HStack, Link } from "@chakra-ui/react";
import React from "react";

export const Header = () => {
  return (
    <Flex
      position="fixed"
      top={0}
      left={0}
      w="full"
      justifyContent="space-between"
      alignItems="center"
      py="12px"
      px="48px"
      zIndex="999"
    >
      <svg
        viewBox="0 0 342 35"
        xmlns="http://www.w3.org/2000/svg"
        width="120px"
      >
        <path
          d="M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z"
          fill="#171a20"
        ></path>
      </svg>
      <HStack>
        <HeaderLink text="Model S" />
        <HeaderLink text="Model 3" />
        <HeaderLink text="Model X" />
        <HeaderLink text="Model Y" />
        <HeaderLink text="Powerwall" />
        <HeaderLink text="Charging" />
      </HStack>
      <HStack>
        <HeaderLink text="Shop" />
        <HeaderLink text="Account" />
        <HeaderLink text="Menu" />
      </HStack>
    </Flex>
  );
};

const HeaderLink = ({ text }: { text: string }) => {
  return (
    <Link
      fontSize={14}
      fontWeight="bold"
      letterSpacing="1px"
      px="12px"
      py="4px"
      borderRadius="lg"
      transition="0.3s ease-in-out"
      _hover={{ textDecoration: "none", bgColor: "blackAlpha.200" }}
    >
      {text}
    </Link>
  );
};

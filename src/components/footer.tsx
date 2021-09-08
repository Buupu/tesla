import { HStack, Link } from "@chakra-ui/layout";
import React from "react";

export const Footer = () => {
  return (
    <HStack spacing="20px" pb="30px" fontSize={13} color="blackAlpha.700">
      <Link>Tesla © 2021</Link>
      <Link>Privacy & Legal </Link>
      <Link>Contact</Link>
      <Link>Careers</Link>
      <Link>News</Link>
      <Link>Locations</Link>
    </HStack>
  );
};

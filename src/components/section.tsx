import {
  Box,
  Heading,
  Text,
  Link,
  HStack,
  Button,
  Flex,
  Icon,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { SectionModal } from "../modal/section";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { Footer } from "./footer";

export const Section = ({
  section,
  isFirst,
  isLast,
}: {
  section: SectionModal;
  isFirst: boolean;
  isLast: boolean;
}) => {
  const MotionBox = motion(Box);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const topDiv = bgContainerRef!.current!.offsetTop;
    const topDivMinusScrollY = Math.abs(topDiv - window.scrollY);

    const pixelInViewPort = window.innerHeight - topDivMinusScrollY;
    let opacity = 0;
    let zIndex = 0;

    if (pixelInViewPort / window.innerHeight > 0.6) {
      opacity = (pixelInViewPort / window.innerHeight - 0.6) * 2.5;
      zIndex = 1;
    }
    contentRef!.current!.style.opacity = String(opacity);
    contentRef!.current!.style.zIndex = String(zIndex);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", () => handleScroll());
  }, []);

  return (
    <Flex
      h="100vh"
      maxH="100vh"
      w="full"
      maxW="100%"
      bgImage={section.bgImage}
      backgroundPosition="center"
      backgroundSize="cover"
      ref={bgContainerRef}
      style={{ scrollSnapAlign: "start" }}
    >
      <Flex
        position="fixed"
        top={0}
        left={0}
        alignItems="center"
        flexDirection="column"
        h="100vh"
        maxH="100vh"
        w="full"
        maxW="100%"
        ref={contentRef}
      >
        <Box flex={1} pt="20vh" textAlign="center">
          <Heading fontSize={44}>{section.heading}</Heading>
          <Text color="blackAlpha.700">
            {section.subheading.text}{" "}
            <Link textDecoration="underline">
              {section.subheading.link.text}
            </Link>
          </Text>
        </Box>
        <HStack spacing="32px" pb="40px">
          {section.primaryButton.text && (
            <Button
              w="250px"
              borderRadius="full"
              bgColor={isLast ? "blackAlpha.900" : "blackAlpha.700"}
              color="white"
              fontWeight="normal"
              textTransform="uppercase"
              fontSize={14}
              _hover={{
                bgColor: isLast ? "blackAlpha.900" : "blackAlpha.700",
                color: "white",
              }}
            >
              {section.primaryButton.text}
            </Button>
          )}
          {section.secondaryButton.text && (
            <Button
              w="250px"
              borderRadius="full"
              bgColor="whiteAlpha.700"
              color="black"
              fontWeight="normal"
              textTransform="uppercase"
              fontSize={14}
              _hover={{ bgColor: "whiteAlpha.700", color: "black" }}
            >
              {section.secondaryButton.text}
            </Button>
          )}
        </HStack>
        <Link pb="20px" textDecoration="underline">
          {section.subLink.text}
        </Link>
        <MotionBox
          pb="30px"
          animate={{ y: [3, -3, 3] }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
        >
          {isFirst && <Icon h="36px" w="36px" as={IoIosArrowDown} />}
        </MotionBox>
        {isLast && <Footer />}
      </Flex>
    </Flex>
  );
};

import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Accessories from "./assets/accessories.jpg";
import Model3 from "./assets/model3.jpg";
import ModelS from "./assets/modelS.jpg";
import ModelX from "./assets/modelX.jpg";
import ModelY from "./assets/modelY.jpg";
import Solar from "./assets/solar.jpg";
import { SectionModal } from "./modal/section";
import { Section } from "./components/section";

import "./App.css";
import "@fontsource/nunito-sans";
import { Header } from "./components/header";

const sections: SectionModal[] = [
  {
    heading: "Model 3",
    subheading: {
      text: "1% Company Car Tax.",
      link: { text: "Learn More", to: "" },
    },
    primaryButton: { text: "custom order", to: "" },
    secondaryButton: { text: "available inventory", to: "" },
    subLink: { text: "Schedule a Touchless Test Drive", to: "" },
    bgImage: Model3,
  },
  {
    heading: "Model S",
    subheading: {
      text: "1% Company Car Tax.",
      link: { text: "Learn More", to: "" },
    },
    primaryButton: { text: "custom order", to: "" },
    secondaryButton: { text: "available inventory", to: "" },
    subLink: { text: "", to: "" },
    bgImage: ModelS,
  },
  {
    heading: "Solar and Powerwall",
    subheading: { text: "Power Everything", link: { text: "", to: "" } },
    primaryButton: { text: "learn more", to: "" },
    secondaryButton: { text: "", to: "" },
    subLink: { text: "", to: "" },
    bgImage: Solar,
  },
  {
    heading: "Model X",
    subheading: {
      text: "1% Company Car Tax.",
      link: { text: "Learn More", to: "" },
    },
    primaryButton: { text: "custom order", to: "" },
    secondaryButton: { text: "available inventory", to: "" },
    subLink: { text: "", to: "" },
    bgImage: ModelX,
  },
  {
    heading: "Model Y",
    subheading: { text: "", link: { text: "", to: "" } },
    primaryButton: { text: "learn more", to: "" },
    secondaryButton: { text: "", to: "" },
    subLink: { text: "", to: "" },
    bgImage: ModelY,
  },
  {
    heading: "Accessories",
    subheading: { text: "", link: { text: "", to: "" } },
    primaryButton: { text: "Shop Now", to: "" },
    secondaryButton: { text: "", to: "" },
    subLink: { text: "", to: "" },
    bgImage: Accessories,
  },
];

const theme = extendTheme({
  fonts: { heading: "Nunito Sans", body: "Nunito Sans" },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    {sections.map((section, index) => {
      return (
        <Section
          key={section.heading}
          section={section}
          isFirst={index === 0}
          isLast={index === sections.length - 1}
        />
      );
    })}
  </ChakraProvider>
);

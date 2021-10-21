import { HStack } from "@chakra-ui/react";
import React from "react";
import Admin from "./Admin";

const Navbar = () => {
  return (
    <HStack mt={4} mb={{ base: 12, sm: 24, md: 36 }} justify="flex-end">
      Navbar
      <Admin />
    </HStack>
  );
};

export default Navbar;

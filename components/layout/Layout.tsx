import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

interface Props {
  children?: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props) => {
  return (
    <Container maxW="container.sm">
      <Flex direction="column" height="100vh">
        <Navbar />
        {children}
        <Footer />
      </Flex>
    </Container>
  );
};

export default Layout;

import { Center, Text, Box } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Center mt="auto" pb={2} as="footer">
      <Text color="white">
        Powered with ♥ by{" "}
        <Box
          fontWeight="bold"
          href="https://www.linkedin.com/in/aaronthangnguyen/"
          rel="noopener noreferrer"
          target="_blank"
          as="a"
        >
          Aaron Nguyen
        </Box>
      </Text>
    </Center>
  );
};

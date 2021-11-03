import { Center, Flex, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import TicketForm from "../components/ticket/TicketForm";

const IndexPage: NextPage = () => {
  return (
    <Flex direction="column">
      <Head>
        <title>Check-in App</title>
        <meta
          name="Check-in App"
          content="Check-in Valencia students attending tutoring appointments"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center>
        <Heading mb={8} size="2xl" fontWeight="black" as="h1">
          Check-in.App
        </Heading>
      </Center>

      {/* <Form /> */}
      <TicketForm />
    </Flex>
  );
};

export default IndexPage;

import { Box, Container } from "@chakra-ui/react";
import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import useSWR from "swr";
import { CreateTicketForm } from "../components/forms/CreateTicketForm";
import { Footer } from "../components/shared/Footer";
import { Ticket } from "../types/ticket";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const IndexPage: NextPage = () => {
  const { data, mutate } = useSWR<Ticket[]>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/tickets`,
    fetcher
  );

  return (
    <div>
      <Head>
        <title>Check-in.App</title>
        <meta name="Check-in.App" content="A student check-in application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container
          height="95vh"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Box bg="white" p={12} rounded="xl" boxShadow="dark-lg">
            <CreateTicketForm onMutate={mutate} />
          </Box>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default IndexPage;

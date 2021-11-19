import { Heading } from "@chakra-ui/react";
import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import useSWR from "swr";
import { CreateTicketForm } from "../components/forms/CreateTicketForm";
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
        <Heading>Check-in.App</Heading>
        {data
          ?.slice(0)
          .reverse()
          .map((ticket) => {
            return (
              <div key={Math.random() * 1000}>
                {ticket.studentId}, {ticket.course}
              </div>
            );
          })}

        <CreateTicketForm onMutate={mutate} />
      </main>

      <footer></footer>
    </div>
  );
};

export default IndexPage;

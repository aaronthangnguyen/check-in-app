import type { NextPage } from "next";
import Head from "next/head";
import useSWR, { useSWRConfig } from "swr";
import axios, { Method } from "axios";
import { CreateTicket, Ticket } from "../types/ticket";
import { Button, Heading } from "@chakra-ui/react";
import { createTicket } from "../apis/tickets.api";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);
const TICKETS_URL = "http://localhost:3000/tickets";

const IndexPage: NextPage = () => {
  const { data } = useSWR<Ticket[]>(TICKETS_URL, fetcher);

  const { mutate } = useSWRConfig();

  const handleCreateTicket = async () => {
    const newTicket: CreateTicket = {
      studentId: "V000000000",
      course: "MAC 1105 | College Algebra",
    };

    mutate(
      TICKETS_URL,
      [...(data || []), { id: "key", ...newTicket }], // Let key be id placeholder until revalidation
      false
    );

    await createTicket(TICKETS_URL, newTicket);

    mutate(TICKETS_URL);
  };

  return (
    <div>
      <Head>
        <title>Check-in.App</title>
        <meta name="Check-in.App" content="A student check-in application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading>Tickets</Heading>
        <Button isDisabled={!data} onClick={handleCreateTicket}>
          Create
        </Button>
        {data?.map((ticket) => {
          return (
            <div key={ticket.id}>
              {ticket.studentId}, {ticket.course},{ticket.createDate}
            </div>
          );
        })}
      </main>

      <footer></footer>
    </div>
  );
};

export default IndexPage;

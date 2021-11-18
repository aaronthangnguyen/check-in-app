import type { NextPage } from "next";
import Head from "next/head";
import useSWR, { useSWRConfig } from "swr";
import axios, { Method } from "axios";
import { CreateTicket, Ticket } from "../types/ticket";
import { Button, Heading } from "@chakra-ui/react";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);
const URL = "http://localhost:3001";

const IndexPage: NextPage = () => {
  const { data } = useSWR<Ticket[]>(`${URL}/tickets`, fetcher);
  const { mutate } = useSWRConfig();

  const handleCreateTicket = async () => {
    const newTicket: CreateTicket = {
      studentId: "V000000000",
      course: "MAC 1105 | College Algebra",
    };

    mutate(
      `${URL}/tickets`,
      [...(data || []), { id: "key", ...newTicket }], // Let key be id placeholder until revalidation
      false
    );

    await createTicket(newTicket);

    mutate(`${URL}/tickets`);
  };

  const createTicket = async (newTicket: CreateTicket) => {
    const options = {
      method: "POST" as Method,
      url: `${URL}/tickets`,
      headers: { "Content-Type": "application/json" },
      data: newTicket,
    };

    axios
      .request(options)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
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
              {ticket.studentId}, {ticket.course},{ticket.createAt}
            </div>
          );
        })}
      </main>

      <footer></footer>
    </div>
  );
};

export default IndexPage;

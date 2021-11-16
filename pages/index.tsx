import type { NextPage } from "next";
import Head from "next/head";

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Check-in.App</title>
        <meta name="Check-in.App" content="A student check-in application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>Hello World</main>

      <footer></footer>
    </div>
  );
};

export default IndexPage;

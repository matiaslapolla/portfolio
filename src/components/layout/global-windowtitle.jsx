import Head from "next/head";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

function GlobalWindowTitle() {
  return (
    <Head>
      <title>Matias Lapolla - Frontend Developer</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href={inter.stylesheet} />
    </Head>
  );
}

export default GlobalWindowTitle;

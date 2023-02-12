import "@/styles/globals.css";
import NavBar from "@/components/layout/nav-bar";
import Head from "next/head";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Matias Lapolla</title>
				<meta name="description" content="Matias Lapolla's portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />
			<Component {...pageProps} />
		</>
	);
}

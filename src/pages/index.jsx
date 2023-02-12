import Head from "next/head";
import { Inter } from "@next/font/google";
import NavBar from "@/components/layout/nav-bar";
import PageHeader from "@/components/layout/page-header";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
	return (
		<>
			<PageHeader
				title={"Welcome"}
				subtitle={"You have power over your mind – not outside events."}
			/>
		</>
	);
}

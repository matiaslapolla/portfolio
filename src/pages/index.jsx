import Head from "next/head";
import { Inter } from "@next/font/google";
import NavBar from "@/components/layout/nav-bar";
import PageHeader from "@/components/layout/page-header";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
	return (
		<>
			<div className={"flex columns-2"}>
				<div className={"flex-1 border border-red-500"}>Test</div>
				<div className={"flex-1 border border-red-500"}>
					<Image fill={true} />
				</div>
			</div>
		</>
	);
}

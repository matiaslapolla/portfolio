import "@/styles/globals.css";
import NavBar from "@/components/layout/nav-bar";
import GlobalWindowTitle from "@/components/layout/global-windowtitle";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalWindowTitle />
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

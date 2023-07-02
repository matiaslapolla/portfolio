import "@/styles/globals.css";
import NavBar from "@/components/layout/nav-bar";
import GlobalWindowTitle from "@/components/layout/global-windowtitle";
import Footer from "@/components/layout/footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalWindowTitle />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

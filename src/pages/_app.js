import "@/styles/globals.css";
import Footer from "./components/footer";
import Menu from "./components/menu";

export default function App({ Component, pageProps }) {
  return <>
  <Menu />
  <Component {...pageProps} />;
  <Footer />
  </>
}

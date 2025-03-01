import "@/styles/globals.css";
import NavBar from "./components/modules/NavBar/NavBar";
import Footer from "./components/modules/Footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
    <NavBar/>
    <Component {...pageProps} />
    <Footer/>
    </>
  );
}

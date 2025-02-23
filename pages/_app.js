import "@/styles/globals.css";
import NavBar from "./components/modules/NavBar/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <>
    <NavBar/>
    <Component {...pageProps} />
    </>
  );
}

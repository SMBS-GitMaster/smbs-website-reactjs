import "react-multi-carousel/lib/styles.css";
import "@/styles/css/main.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

import Layout from "../components/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    pageProps== 'login'?
    <div>
      <Component {...pageProps} />
    </div>
    :
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

import "../styles/globals.css";
import Layout from "../components/Layout";
import { SessionProvider } from "next-auth/react"
import { useRouter } from 'next/router'


  function MyApp({
  Component, pageProps: { session, ...pageProps }
  })  {
 
  const router = useRouter()
  return (
    <>
      <SessionProvider session={session}>
        {console.log(router.pathname)}
        {
          router.pathname === '/login' || router.pathname === '/ForgotPassword'?
            <Component {...pageProps} />
          :
          <Layout>
            <Component {...pageProps} />
          </Layout>
        }
      </SessionProvider>
   </>
  );
}

export default MyApp;

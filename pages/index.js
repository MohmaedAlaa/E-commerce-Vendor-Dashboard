import Head from "next/head";

import Dashboard from './Dashboard';



export default function Home() {
  
  



  return (



    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8" />
      </Head>

      <main className="container">
        {/* <p className="text-4xl text-blue-600">heading</p> */}
        {/* <Filters /> */}
          <Dashboard/>
      </main>
    </div>
  );
}

import Head from 'next/head'
import { useEffect, useState } from 'react'
import Layout from '../components/layout/layout'
import Pageseo from '../components/Pageheader/pageheader'

export default function Home() {

  const [url, setUrl] = useState('')
  console.log(url)  

  useEffect(() => {
    setUrl(location.href)
  },[url])
  return (<>

    <Head>  
      <title>Cash Paring Front end </title>
      <meta name="description" content="Front end of Cash Paring " />
      <meta property="og:title" content="LandinG Page " key="title" />
      <meta content={url} property="og:url" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charset="utf-8"/>
      <link rel="icon" href="/favicon.ico" />

    </Head>
    {/* <Pageseo  title={"Cash Paring"} description={"Cash Paring Details and description "} url={url}/> */}
    
    <Layout>
      <h1> Cash paring </h1>
      <h1> Cash paring </h1>
      <h1> Cash paring </h1>
      <h1> Cash paring </h1>
      <h1> Cash paring </h1>
       
    </Layout>


    </>)
}

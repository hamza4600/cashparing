//  page Datils and description  every pag have its own details and description

import Head from "next/head";

export default function Pageseo({ title, description , url}) {
    return (
        <>
            <Head>
               <title> {title}</title>
               <meta name="description" content={description} />
               <meta property="og:title" content={title} key="title" />

                {/* main url of page   */}
               <meta content={url} property="og:url" />
               <meta name="viewport" content="initial-scale=1.0, width=device-width" />
               <meta charset="utf-8"/>
               {/* <link rel="icon" href="/favicon.ico" /> */}

            </Head>
            
        </>
    )
}
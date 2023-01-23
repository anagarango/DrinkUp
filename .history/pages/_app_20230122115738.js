import '@/styles/globals.css'
import { Html, Head, Main, NextScript } from 'next/document'

export default function App({ Component, pageProps }) {
  return (
    <Html lang="en">
       <Head>
         <link rel="preconnect" href="https://fonts.googleapis.com"/> 
         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true}/> 
         <link href="https://fonts.googleapis.com/css?family=Montserrat&effect=neon" rel="stylesheet"/>
         <link href="https://fonts.googleapis.com/css2?family=Neonderthaw&effect=neon" rel="stylesheet"></link>
         <link href="https://fonts.googleapis.com/css2?family=Train+One&effect=neon" rel="stylesheet"></link>
       </Head>
       <body>
        <Component {...pageProps} />
         <Main />
         <NextScript />
       </body>
     </Html>
  )
  
  
 
}

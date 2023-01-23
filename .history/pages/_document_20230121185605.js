import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true}/> 
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap&effect=neon" rel="stylesheet"/>
        {/* https://fonts.googleapis.com/css?family=Lato:100&effect=neon" */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

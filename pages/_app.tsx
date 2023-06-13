import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyle from '../styles/GlobalStyles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS Login</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

        <GlobalStyle />
        <Component {...pageProps} />
    </>
  )
}

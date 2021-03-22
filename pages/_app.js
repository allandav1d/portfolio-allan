import '../styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>AllanDav1d - Portfólio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Description" content="AllanDav1d é um Desenvolvedor Full Stack e Game Design nas horas vagas, localizado em São Paulo - Brasil."></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

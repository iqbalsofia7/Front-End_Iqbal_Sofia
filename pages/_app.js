import { Provider } from 'react-redux'
import store from '../store/store.js'
import Header from '@/components/header.js'
import Footer from '@/components/footer.js'
import Head from 'next/head'
import '@/styles/globals.css'
// import localFont from 'next/font/local'


export default function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <>
      <Head>
        <title>Next JS</title>
      </Head>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </>
    </Provider>
  )
}


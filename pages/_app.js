import { Provider } from 'react-redux'
import store from '../store/store.js'
import Header from '@/components/header.js'
import Footer from '@/components/footer.js'
import Head from 'next/head'
import '@/styles/globals.css';
import { useState, useEffect } from 'react';
// import localFont from 'next/font/local'


export default function App({ Component, pageProps }) {
  
  const [log, setLog] = useState('connexion')
  const changeLog = (event) => {
    event.preventDefault();
    setLog('inscription');
  };
    const changeLog2 =(event)=>{
    setLog('connexion')
    event.preventDefault();

  }

  const [animeList, setAnimeList] = useState([])
  const [link, setLink] = useState('viewAll')
  useEffect(() => {
    fetch('https://api.jikan.moe/v4/anime')
      .then(response => response.json())
      .then(data => setAnimeList(data.data));
  }, []);
  const showTrend =()=>{
    setLink('trendingNow')
  }
  return (
    <Provider store={store}>
      <>
      <Head>
        <title>PROJET</title>
      </Head>
        <Header/>
        <Component link={link} showTrend={showTrend}{...pageProps} animeList={animeList} log={log} changeLog={changeLog} changeLog2={changeLog2}  />
        <Footer/>
      </>
    </Provider>
  )
}


import React from 'react';
import { useState, useEffect } from 'react';
import styles from '@/styles/main.module.css'
import Link from 'next/link.js'
import {AiFillMessage, AiOutlineSearch, AiOutlineShoppingCart} from "react-icons/ai"
import { useRouter } from 'next/router.js';

function RankList(props) {
    // const router = useRouter()
    // const link = router.query.link

    const [animeList, setAnimeList] = useState([])
    useEffect(() => {
        fetch('https://api.jikan.moe/v4/anime')
        .then(response => response.json())
        .then(data => setAnimeList(data.data));
    }, []);
    const scoreList = [...animeList].sort((a, b) => b.score - a.score);

    return (
        <div>
                <h3 className={styles.titleBig}>UPCOMING NEXT SEASON</h3>
    <div className={styles.cards}>
    {scoreList.map((anime) => {
        return(
        <div key={anime.mal_id} className={styles.card}>
        <Link href={`/${anime.mal_id}`}>
        <img className={styles.img} src={anime.images.webp.image_url} />
        </Link>
        <p  className={styles.width}>{anime.title}</p>
        <span className={styles.cart}><AiOutlineShoppingCart/></span>

        <div className={styles.none}>
            <h5>{anime.type}  {anime.status} </h5>
            <p>{anime.genres.map((item)=>(<span className={styles.spanBadges}>{item.name}</span>))}</p>
            <p>{anime.source}</p>
            <div className={styles.triangle}></div>
        </div>
        </div>
    )})} 
        </div>
        </div>
    );
        // }
}

export default RankList;
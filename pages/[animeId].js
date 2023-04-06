import { useRouter } from 'next/router.js';
import styles from '../styles/main.module.css'
import Link from 'next/link.js'
import {AiFillHeart} from "react-icons/ai"
import { useState, useEffect } from 'react';
export default function Anime() {
    const [animeList, setAnimeList] = useState([])
    useEffect(() => {
      fetch('https://api.jikan.moe/v4/anime')
        .then(response => response.json())
        .then(data => setAnimeList(data.data));
    }, []);
    const router = useRouter()
    const animeId = router.query.animeId
    const item = animeList.find((el)=> el.mal_id == animeId)

    return (
        <div>
            {item ? (
            <div>
                <div className={styles.bg}>
                </div>
                <div className={styles.abs}>
                    <div>
                    <img className={styles.img} src={item.images.webp.image_url} />
                    <button className={styles.addtoList}>Add to List</button> 
                    <span className={styles.heart}><AiFillHeart/></span>
                   </div>
                   <div className={styles.end}>
                        <div>
                        <h2>{item.title}</h2>
                        <p>{item.synopsis}</p>  
                        </div> 
                    </div>
                </div>
                </div>
            ) : (
            <div>Loading...</div>
            )}
        </div>
        );
    
}
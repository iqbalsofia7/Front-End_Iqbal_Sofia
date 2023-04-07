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
                    <div className={styles.flexx}>
                    <button className={styles.addtoList}>Add to List</button> 
                    <p className={styles.heart}><AiFillHeart/></p>
                    </div>
                   </div>

                   <div className={styles.end}>
                        <div>
                        <h2 className={styles.h2t}>{item.title}</h2>
                        <p className={styles.wwidth}>{item.synopsis}</p>  
                        </div> 
                        <div className={styles.linkAnime}>
                            <p>Overview</p>
                            <p>Characters</p>
                            <p>Staff</p>
                            <p>Stats</p>
                            <p>Social</p>
                        </div>
                    </div>
   
                </div>             
                <div className={styles.down}>

                <div className={styles.left}>
                    <div className={styles.siide}>
                        <p><span className={styles.red}><AiFillHeart/></span><span> #{item.popularity} Most Popular All Time</span></p>
                    </div>
                    <div className={styles.siide}>
                        <p><span className={styles.red}><AiFillHeart/></span><span> #{item.rank} Most Popular 2023</span></p>
                    </div>
                    <div className={styles.sidebar}>
                        <div className={styles.side}>
                            <h4>Format </h4>
                            <p>{item.type}</p>
                        </div>
                        <div className={styles.side}>
                            <h4>Status </h4>
                            <p>{item.status}</p>
                        </div>
                        <div className={styles.side}>
                            <h4>Start date </h4>
                            <p>{item.aired.prop.from.day}/{item.aired.prop.from.month}/{item.aired.prop.from.year}</p>
                        </div>
                        <div className={styles.side}>
                            <h4>Season </h4>
                            <p>{item.season}</p>
                        </div>
                        <div className={styles.side}>
                            <h4>Popularity </h4>
                            <p>{item.popularity}</p>
                        </div>
                        <div className={styles.side}>
                            <h4>Favorites </h4>
                            <p>{item.favorites}</p>
                        </div>
                        <div className={styles.side}>
                            <h4>Studios </h4>
                            <p>{item.studios.name}</p>
                        </div>
                    </div>
                </div> {/* left */}

                </div>

                </div>
            ) : (
            <div className={styles.loading}>Loading...</div>
            )}
        </div>
        );
    
}
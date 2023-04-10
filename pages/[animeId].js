import { useRouter } from 'next/router.js';
import styles from '../styles/main.module.css'
import Link from 'next/link.js'
import Image from 'next/image.js'
import {AiFillHeart} from "react-icons/ai"
import { useState, useEffect } from 'react';
import perso1 from './img/perso1.jpg'
import perso2 from './img/perso2.jpg'
import perso3 from './img/perso3.jpg'
import perso4 from './img/perso4.jpg'
import perso5 from './img/perso5.jpg'
import perso6 from './img/perso6.jpg'
import act1 from './img/act1.jpg'
import act2 from './img/act2.jpg'
import act3 from './img/act3.jpg'
import act4 from './img/act4.jpg'
import act5 from './img/act5.jpg'
import act6 from './img/act6.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { incrementer } from '@/Features/counter/counterSlice.js'

export default function Anime() {
    const dispatch = useDispatch()  
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
                    <button className={styles.addtoList} onClick={()=> dispatch(incrementer())}>Add to Basket</button> 
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
                                {item.studios && item.studios.length > 0 ? (
                                <p>{item.studios[0].name}</p> 
                                ) : (
                                <p>Pas de Studios</p>
                                )}
                            </div>
                        </div>
                    </div> {/* left */}
                <div className={styles.right}>
                    <h4 className={styles.h4}>Characters</h4>
                    <div className={styles.fflex}>
                    <div className={styles.charact}>
                        <Image className={styles.immg} src={perso1} />
                        <div className={styles.cnter}>
                            <div className={styles.flexD}>
                                <p>Tanjirou Kamado</p>
                                <p>Natsuki Hanae</p>
                            </div>
                            <div className={styles.flexDD}>
                                <p>Main</p>
                                <p>Japanese</p>
                            </div>
                        </div>
                        <Image className={styles.immg} src={act1} />
                    </div>
                    <div className={styles.charact}>
                        <Image className={styles.immg} src={perso2} />
                        <div className={styles.cnter}>
                            <div className={styles.flexD}>
                                <p>Nezuko Kamado</p>
                                <p>Akari Kitou</p>
                            </div>
                            <div className={styles.flexDD}>
                                <p>Main</p>
                                <p>Japanese</p>
                            </div>
                        </div>
                        <Image className={styles.immg} src={act2} />
                    </div>


                    <div className={styles.charact}>
                        <Image className={styles.immg} src={perso3} />
                        <div className={styles.cnter}>
                            <div className={styles.flexD}>
                                <p>Muichirou Tokitou</p>
                                <p>Kengo Kawanishi</p>
                            </div>
                            <div className={styles.flexDD}>
                                <p>Main</p>
                                <p>Japanese</p>
                            </div>
                        </div>
                        <Image className={styles.immg} src={act3} />
                    </div>
                    <div className={styles.charact}>
                        <Image className={styles.immg} src={perso4} />
                        <div className={styles.cnter}>
                            <div className={styles.flexD}>
                                <p>Mitsuri Kanroji</p>
                                <p>Kana Hanazawa</p>
                            </div>
                            <div className={styles.flexDD}>
                                <p>Main</p>
                                <p>Japanese</p>
                            </div>
                        </div>
                        <Image className={styles.immg} src={act4} />
                    </div><div className={styles.charact}>
                        <Image className={styles.immg} src={perso5} />
                        <div className={styles.cnter}>
                            <div className={styles.flexD}>
                                <p>Genya Shinazugawa</p>
                                <p>Nobuhiko Okamtato</p>
                            </div>
                            <div className={styles.flexDD}>
                                <p>Main</p>
                                <p>Japanese</p>
                            </div>
                        </div>
                        <Image className={styles.immg} src={act5} />
                    </div>
                    <div className={styles.charact}>
                        <Image className={styles.immg} src={perso6} />
                        <div className={styles.cnter}>
                            <div className={styles.flexD}>
                                <p>Inozuke Hashibira</p>
                                <p>Yoshitsugu Matsuoka</p>
                            </div>
                            <div className={styles.flexDD}>
                                <p>Main</p>
                                <p>Japanese</p>
                            </div>
                        </div>
                        <Image className={styles.immg} src={act6} />
                    </div>
                    </div>
                    <h4 className={styles.h4 + ' ' + styles.padd}>Trailer</h4>
                    <div> {item.trailer.embed_url ? (
                        <div>
                            <iframe className={styles.iframe} title={item.title} src={item.trailer.embed_url} width="300" height="200" frameborder="0" allowfullscreen></iframe>
                        </div>
                    ) : (
                        <p className={styles.iframe}>Aucun trailer n'est disponible pour {item.title}.</p>
                        )}</div>
                </div>
                </div>

                </div>
            ) : (
            <div className={styles.loading}>Loading...</div>
            )}
        </div>
        );
    
}
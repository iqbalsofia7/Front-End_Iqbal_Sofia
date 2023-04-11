import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image.js'
import styles from '@/styles/main.module.css'
import { supprimerFav, clear } from '@/Features/counter/counterSlice.js'
import Link from 'next/link.js'

export default function Favoris() {
    
    const dispatch = useDispatch()
    const animeToWatch = useSelector(state => state.counter.cartItems2);
    const count2 = useSelector((state)=>state.counter.valueFav)

    return(
        <div>
            <h4 className={styles.titlePanier}>MES FAVORIS</h4>

        {count2 == 0 ?
            (<div  className={styles.rien}>
                <h4>Aucun Favoris</h4>
            </div>) :
            (<div className={styles.all}> 
                {animeToWatch.map((anime, index)=>{
                    return(
                   
                    <div key={index} className={styles.article}>
                        <div className={styles.padd}> 
                        <Link href={`/${anime.mal_id}`}>
                        <img src={anime.image}  className={styles.imgPanier}/>
                        </Link>
                        <p>{anime.title}</p>
                        </div>
                        <p className={styles.delete} onClick={() => dispatch(supprimerFav(anime.title))}>❌</p>
                    </div>
                    )
                })}
            </div>)
            }

            <div className={styles.ttvu}>
                <button className={styles.toutVu} onClick={() => dispatch(clear())}>Tout Vu</button>
            </div>
        </div>
    )
}
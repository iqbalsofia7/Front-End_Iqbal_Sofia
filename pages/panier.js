import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image.js'
import styles from '@/styles/main.module.css'
import { supprimerPanier, toutVu } from '@/Features/counter/counterSlice.js'
import Link from 'next/link.js'
import Head from 'next/head'

export default function Panier() {
    
    const dispatch = useDispatch()
    const animeToWatch = useSelector(state => state.counter.cartItems);
    const count = useSelector((state)=>state.counter.value)
    const loggedIn = useSelector((state)=>state.counter.loggedIn)

    return(
        <div>
        <Head>
        <title>Panier</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <h4 className={styles.titlePanier}>A VOIR</h4>
        { loggedIn == false ? 
        <div className={styles.attention}>
            <h2>Veuillez vous connecter pour avoir accès au panier</h2>
            <Link href='/login'>
                <button className={styles.loginbtn}>Login</button>
            </Link>
        </div> : null}
        {count == 0 ?
            (<div  className={styles.rien}>
                <h4>Votre panier est vide</h4>
            </div>) :
            (<div className={styles.all}> 
                {animeToWatch.map((anime, index)=>{
                    return(
                    <div key={anime.mal_id} className={styles.article}>
                        {/* <img className='imgAchat' src={item.img} alt="" /> */}
                        <div className={styles.padd}>
                        <Link href={`/${anime.mal_id}`}>
                        <img src={anime.image}  className={styles.imgPanier}/>
                        </Link>
                        <p>{anime.title}</p>
                        </div>
                        <p className={styles.delete} onClick={() => dispatch(supprimerPanier(anime.title))}>❌</p>
                    </div>
                    )
                })}
            </div>)
            }

            <div className={styles.ttvu}>
                <button className={styles.toutVu} onClick={() => dispatch(toutVu())}>Tout Vu</button>
            </div>
        </div>
    )
}
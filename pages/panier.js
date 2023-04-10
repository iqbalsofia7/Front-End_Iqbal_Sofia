import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image.js'
import styles from '@/styles/main.module.css'
import { supprimerPanier, toutVu } from '@/Features/counter/counterSlice.js'

export default function Panier() {
    
    const dispatch = useDispatch()
    const animeToWatch = useSelector(state => state.counter.cartItems);
    const count = useSelector((state)=>state.counter.value)

    return(
        <div>
            <h4 className={styles.titlePanier}>A VOIR</h4>

        {count == 0 ?
            (<div  className={styles.rien}>
                <h4>Votre panier est vide</h4>
            </div>) :
            (<div className={styles.all}> 
                {animeToWatch.map((anime, index)=>{
                    return(
                    <div key={index} className={styles.article}>
                        {/* <img className='imgAchat' src={item.img} alt="" /> */}
                        <div className={styles.padd}>
                        <img src={anime.image}  className={styles.imgPanier}/>
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
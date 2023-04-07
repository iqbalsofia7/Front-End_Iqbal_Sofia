import Head from 'next/head'
import styles from '@/styles/main.module.css'
import Link from 'next/link.js'
import { useSelector, useDispatch } from 'react-redux'
import { incrementer } from '@/Features/counter/counterSlice.js'
import {FaMobile, FaPaintBrush} from "react-icons/fa"
import {AiFillMessage, AiOutlineSearch, AiOutlineShoppingCart} from "react-icons/ai"
import {BiNetworkChart} from "react-icons/bi"
import {FiChevronRight} from "react-icons/fi"
import {CiFaceSmile} from "react-icons/ci"
import { useState, useEffect } from 'react';
import Carrousel from '../components/carrousel.js'
export default function Home({posts}) {
  // const count = useSelector((state)=>state.counter.value)
  // const dispatch = useDispatch()   onClick={()=> dispatch(incrementer())}
  const [animeList, setAnimeList] = useState([])
  useEffect(() => {
    fetch('https://api.jikan.moe/v4/anime')
      .then(response => response.json())
      .then(data => setAnimeList(data.data));
  }, []);

  const popularityList = [...animeList].sort((a, b) => b.popularity - a.popularity);
  const rankList = [...animeList].sort((a, b) => b.rank - a.rank);
  const topList = [...animeList].sort((a, b) => b.rank - a.rank);
  const favoriteList = [...animeList].sort((a, b) => b.favorites - a.favorites);
  const scoreList = [...animeList].sort((a, b) => b.score - a.score);
  popularityList.length = 5
  rankList.length = 5
  favoriteList.length = 5
  scoreList.length = 5
  topList.length = 10
  return (
    <>
      <Head>
        <title>Next JS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='all'>
        <Carrousel />
        <div className={styles.platform}>

          <div>
            <h2>The next-generation anime platform</h2>
            <p>Track, share, and discover your favorite anime and manga with AniList.</p>
          </div>

<div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.icon}>
            <BiNetworkChart className={styles.icons}/>
            <div className={styles.text} >
              <h4>Discover your obsessions</h4>
              <p>What are your highest rated genres or most
watched voice actors? Follow your watching
habits over time with in-depth statistics.</p>
            </div>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.icon}>
            <FaMobile className={styles.icons}/>
            <div className={styles.text}>
              <h4>Bring AniList anywhere</h4>
              <p>Keep track of your progress on-the-go with
one of many AniList apps across iOS,
Android, macOS, and Windows.</p>
            </div>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.icon}>
            <AiFillMessage className={styles.icons}/>
            <div className={styles.text}>
              <h4>Join the conversation</h4>
              <p>Share your thoughts with our thriving
community, make friends, socialize, and
receive recommendations.</p>
            </div>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.icon}>
            <FaPaintBrush className={styles.icons}/>
            <div className={styles.text}>
              <h4>Tweak it to your liking</h4>
              <p>Customize your scoring system, title format,
color scheme, and much more! Also, we have
a dark mode.</p>
            </div>
            </div>
          </div>
    </div>
          <div className={styles.divButton}>
            <Link href='/signup' >
              <button className={styles.button}>Join Now </button>
            </Link>
          </div>
        </div>

      <div className={styles.genres}>
        <div>
          <p>Search</p>
          <label for="search" className={styles.searchInput}>
            < AiOutlineSearch/> 
            <input type="search" id="site" name="q" /> 
          </label>
        </div>

        <div>
          <p>Genres</p>
          <select className={styles.genre}>
            <option value="Any">Any</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Ecchi">Ecchi</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Horror">Horror</option>
            <option value="Mahou Shoujo">Mahou Shoujo</option>
            <option value="Mecha">Mecha</option>
            <option value="Music">Music</option>
            <option value="Mystery">Mystery</option>
            <option value="Psychological">Psychological</option>
            <option value="Psychological">Romance</option>
          </select>
        </div>

        <div>
          <p>Year</p>
          <select className={styles.genre}>
            <option value="Any">Any</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
          </select>
        </div>

        
        <div>
          <p>Season</p>
          <select className={styles.genre}>
            <option value="Any">Any</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Fall">Fall</option>
          </select>
        </div>

        <div>
          <p>Format</p>
          <select className={styles.genre}>
            <option value="Any">Any</option>
            <option value="1">Je sais pas</option>
            <option value="2">Je sais toujours pas</option>
            <option value="3">Je sais pas non plus</option>
            <option value="4">On saura jamais</option>
          </select>
        </div>
      </div>

      <h3 className={styles.titleBig}>TRENDING NOW</h3>
      <div className={styles.cards}>
      {rankList.map((anime) => {
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
      <p className={styles.viewAll}>View All</p>
      

      <h3 className={styles.titleBig}>POPULARITY THIS SEASON</h3>
      <div className={styles.cards}>
      {popularityList.map((anima) => {
        return(
        <div key={anima.id} className={styles.card}>
          <img className={styles.img} src={anima.images.jpg.image_url} />
          <p  className={styles.width}>{anima.title}</p>
          <span className={styles.cart}><AiOutlineShoppingCart/></span>
          <div className={styles.none}>
              <h5>{anima.type}  {anima.status} </h5>
              <p>{anima.genres.map((item)=>(<span className={styles.spanBadges}>{item.name}</span>))}</p>
              <p>{anima.source}</p>
              <div className={styles.triangle}></div>
          </div>
        </div>
      )})} 
          
      </div>
      <p className={styles.viewAll}>View All</p>


      <h3 className={styles.titleBig}>UPCOMING NEXT SEASON</h3>
      <div className={styles.cards}>
      {scoreList.map((anima) => {
        return(
        <div key={anima.id} className={styles.card}>
          <img className={styles.img} src={anima.images.jpg.image_url} />
          <p  className={styles.width}>{anima.title}</p>
          <span className={styles.cart}><AiOutlineShoppingCart/></span>

          <div className={styles.none}>
              <h5>{anima.type}  {anima.status} </h5>
              <p>{anima.genres.map((item)=>(<span className={styles.spanBadges}>{item.name}</span>))}</p>
              <p>{anima.source}</p>
              <div className={styles.triangle}></div>
          </div>
        </div>
      )})} 
          
      </div>
      <p className={styles.viewAll}>View All</p>


      <h3 className={styles.titleBig}>ALL TIME POPULAR</h3>
      <div className={styles.cards}>
      {favoriteList.map((anima) => {
        return(
        <div key={anima.id} className={styles.card}>
          <img className={styles.img} src={anima.images.jpg.image_url} />
          <p  className={styles.width}>{anima.title}</p>
          <span className={styles.cart}><AiOutlineShoppingCart/></span>

            <div className={styles.none}>
              <h5>{anima.type}  {anima.status} </h5>
              <p>{anima.genres.map((item)=>(<span className={styles.spanBadges}>{item.name}</span>))}</p>
              <p>{anima.source}</p>
              <div className={styles.triangle}></div>
          </div>
        </div>
      )})} 
          
      </div>
      <p className={styles.viewAll}>View All</p>

      <h3 className={styles.titleBig}>TOP 100 ANIME</h3>
      <div className={styles.cardsRank}>
      {topList.map((anime, index) => {
        return(
        <div key={index} className={styles.allTop} >
          <h4 className={styles.number}>#{index+1}</h4>
          <div className={styles.cardRank}>
          <div className={styles.flex}>
            <img className={styles.imgRank} src={anime.images.webp.small_image_url} />
            <div className={styles.bigWidth}>
            <p className={styles.width}>{anime.title}</p>
            <p className={styles.badges}>{anime.genres.map((item)=>(<span>{item.name}</span>))}</p> 
            </div>
          </div>
          <div>
            <CiFaceSmile className={styles.green}/>
            <p className={styles.lightGrey}> {anime.members} users</p>
          </div>  
          <div>
            <p className={styles.greyColor}> {anime.type}</p>
            <p className={styles.lightGrey}> {anime.episodes} episodes</p>
          </div>  
          <div>
              <p className={styles.greyColor}>{anime.season} {anime.year }</p>
              <p className={styles.lightGrey}>{anime.status}</p>
          </div> 
          </div>
        </div>
      )})} 
          
      </div>
      </main>
    </>
  )
}

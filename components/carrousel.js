import Image from 'next/image.js'
import { useState, useEffect } from 'react';
import styles from '../styles/main.module.css'

export default function Carrousel(){

    const [count, setCount] = useState(1)
    const [count2, setCount2] = useState(6)
    const [count3, setCount3] = useState(11)
    const changeSlide = () => {
        setCount(count + 1 > 5 ? 1 : count + 1);
        setCount2(count2 + 1 > 10 ? 6 : count2 + 1);
        setCount3(count3 + 1 > 15 ? 11 : count3 + 1);
        startAutoplay(); // redémarrer le carrousel
    }
    let intervalId;
    //Fonction pour démarrer le carrousel
    function startAutoplay() {
        clearInterval(intervalId); 
        intervalId = setTimeout(changeSlide, 3000);
    }
    useEffect(() => {
        startAutoplay();
        return () => clearInterval(intervalId); //pour éviter les bugs de trnasition d'images
    });
    return(
        <div className={styles.carrousel}>
        <div className={styles.slides}>
        <Image className={styles.carrouselImg} loading='lazy' src={require(`./img/${count}.jpg`)} alt="" />
        <Image className={styles.carrouselImg} loading='lazy' src={require(`./img/${count2}.jpg`)} alt="" />
        <Image className={styles.carrouselImg} loading='lazy' src={require(`./img/${count3}.jpg`)} alt="" />
        </div>
    </div>

    )
}
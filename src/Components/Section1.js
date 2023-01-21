import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Section1.module.css'

export default function Section1 (){

    return(
        <>
            <div className={styles.container}>
                <div className={styles.nurb}></div>
                <div className={styles.title}></div>
                <div className={styles.description}>
                    <p className={styles.strongtxt}>Lendas</p> são feitas atráves da busca pela perfeição.
                    <br/><br/>
                    Esse monstro vem equipado com motor central traseiro que representa o ápice da performance. Marcando incríveis <p className={styles.strongtxt}>6:48:32s</p> na pista de <p className={styles.strongtxt}>Nurburgring</p>.
                </div>
                <div className={styles.car}></div>
                <div className={styles.boxmodels}>
                    <Link to='/' className={styles.viewcar}>Ver o modelo</Link>
                    <Link to='/' className={styles.buildyourcar}>Monte o seu</Link>
                </div>
                <div className={styles.scroll}>
                    <i className={styles.scrollt}></i>
                    <i className={styles.scrolld}></i>
                </div>
            </div>
        </>
    )
}
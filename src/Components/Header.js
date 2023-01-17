import React from "react";
import styles from './Header.module.css'
import foto from '../Photo/logoBlack.png'

export default function Header(){
    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.menu}>
                        <i className={styles.ione}></i>
                        <i className={styles.itwo}></i>
                    </div>
                    <img src={foto} alt='' className={styles.logo}></img>
                    <input placeholder="Encontre uma concessionária" className={styles.input}/>
                    <i></i>
                </div>
            </div>
        </>
    )
}
import React, { useEffect, useRef } from 'react'
import styles from './Section1.module.css'

export default function Section1 (){

    const container = useRef()
    const container2 = useRef()
    const container3 = useRef()
    const container4 = useRef()
    const borderIcon = useRef()
    
    useEffect(()=>{
        const observer = new IntersectionObserver((entry)=>{
            console.log(entry)
        })
        observer.observe(container2.current)
    }, [])

    function smothscroll(){
        container2.current.scrollIntoView({behavior: "smooth"})
    }

    function firstIcon(position, object){
        borderIcon.current.style.top = position + 'px';
        object.current.scrollIntoView({behavior: "smooth"})
    }

    return(
        <>
            <span className={styles.initPage} ref={container}></span>
            <section className={styles.container}>
                <div className={styles.nurb}></div>
                <div className={styles.title}></div>
                <div className={styles.carAndDescription}>
                    <span>
                        <i className={styles.borderIcons} ref={borderIcon}></i>
                        <i className={styles.iconsForScreen} onClick={()=> firstIcon(-3, container)}></i>
                        <i className={styles.iconsForScreen} onClick={()=>firstIcon(27, container2)}></i>
                        <i className={styles.iconsForScreen} onClick={()=>firstIcon(57, container3)}></i>
                        <i className={styles.iconsForScreen} onClick={()=>firstIcon(87, container4)}></i>
                    </span>
                    <div className={styles.car}></div>
                    <div className={styles.boxdescription}>
                        <div className={styles.description}>
                        &nbsp;&nbsp;&nbsp;&nbsp;<p className={styles.strongtxt}>Lendas</p> são feitas atráves da busca pela perfeição.
                            <br/><br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;Esse monstro vem equipado com motor central traseiro que representa o ápice da performance. Marcando incríveis <p className={styles.strongtxt}>6:48:32s</p> na pista de <p className={styles.strongtxt}>Nurburgring</p>.
                        </div>
                        <div className={styles.boxbuttons}>
                            <p className={styles.viewcar} onClick={()=>smothscroll()} >Ver o modelo</p>
                            <p className={styles.buildyourcar}>Monte o seu</p>
                        </div>
                    </div>
                </div>
                <div className={styles.scroll} ref={container2}>
                    <i className={styles.scrollt}></i>
                    <i className={styles.scrolld}></i>
                </div>
            </section>
            <section className={styles.container2}>
                <div className={styles.car2}></div>
                <div className={styles.description2}>
                    <h1>Desempenho máximizado</h1>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ao ver o sinal verde, esse Ford ka exibe sua impressionante capacidade de desempenho no circuito, graças a seus 510 Nm de torque e 412 kW (560 cv). Ele é capaz de acelerar de 0 a 100 km/h em apenas 2,9 segundos, alcançando uma velocidade máxima de 305 km/h antes que você possa piscar. O sistema de escape esportivo leve de aço inoxidável garante uma experiência sonora autêntica até o giro máximo de 12.000 rpm.</p>
                </div>
                <div className={styles.description3}>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O Ford Ka possui um motor de 4,2 litros de alta velocidade, tecnologia de 4 válvulas, incluindo balancins, comando de válvulas, bielas de titânio, pistões forjados, alimentação de óleo otimizada e lubrificação por cárter seco com tanque separado para óleo do motor preparado para forças laterais elevadas. Além disso, para alcançar os melhores tempos possíveis, 6 válvulas individuais garantem a alimentação de ar perfeita em cada cilindro.</p>
                </div>
                <div className={styles.times}>
                    <h1>Recorde nas pistas:</h1>
                    <div>
                        <div>
                            <p>2:10.53 &nbsp; Spa-Francorchamps</p>
                            <p>1:51.29 &nbsp; Suzuka</p>
                            <p>1:54.34 &nbsp; Mônaco</p>
                            <p>2:31.28 &nbsp; Interlagos</p>
                        </div>
                        <div>
                            <p>1:40.47 &nbsp; Silverstone</p>
                            <p>2:32.15 &nbsp; Bahrain</p>
                            <p>1:30.07 &nbsp; Fuji</p>
                            <p>1:45.45 &nbsp; Catalunya</p>
                        </div>
                    </div>
                </div>
            </section>
            <span className={styles.setScrollForContainer3} ref={container3}></span>
            <section className={styles.container3}>
                <div className={styles.car3}>
                </div>
            </section>
            <section className={styles.container4} ref={container4}>
                <div>asdsd</div>
            </section>
            <section className={styles.container5}>
            </section>
        </>
    )
}
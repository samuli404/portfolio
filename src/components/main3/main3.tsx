import React from 'react';
import styles from './main3.module.scss';
import kuva from '../media3/Muokattu.jpg'


const Example3: React.FC = () => {
    return (
        <div className={styles.container}>
            
            <div className={`${styles.flexRow} ${styles.first}`}>
                <div className={styles.split50}>
                    <div className={styles.flexLeft}>
                        <p >I'm an software developer student studying in Myyrmäen varia for 3:thrd year and this is my portfolio.</p>
                        
                    </div>
                    <div className={styles.flexRight}>
                        <img src={kuva} alt="gg" />
                    </div>
                </div>
            </div>

            <div className={styles.flexRow}>
                <div className={styles.splitpictures}>
                    <div className={styles.flexup}>
                        <div className={styles.projektiKuvat}>

                            <div className={styles.projectCard}>
                                <div className={styles.unityKuva}></div>
                                <p>This is my first game</p>
                            </div>
                                
                            
                            <div className={styles.projectCard}>
                                <div className={styles.unityKuva2}></div>
                                <p>This is my first game</p>
                            </div>
                            
                            <div className={styles.projectCard}>
                                <div className={styles.unityKuva3}></div>
                                <p>This is my first game</p>
                            </div>

                            <div className={styles.projectCard}>
                                <div className={styles.unityKuva4}></div>
                                <p>This is my first game</p>
                            </div>
                            
                            </div>
                        
                    </div>
                    <div className={styles.flexdown}>
                        
                        <p>There are 2 levels on it</p>
                        <p>there is even menus with volume sliders on it</p>
                        <p>and a pause menu</p>

                    </div>
                </div>
                <div className={styles.information}></div>
            </div>
        </div>

        
    )
}

export default Example3;

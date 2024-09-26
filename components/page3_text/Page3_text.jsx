import React from 'react'
import styles from './Page3_text.module.css'

import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Page3_text() {
  return (
    <div>
        <div className={styles.text}>
                <div className={styles.text2}>
                    <div className={styles.text3}>
                        Ключевое сообщение
                    </div>
                    <div className={styles.text4}>
                        Brend<span className={styles.text5}> XY</span>
                    </div>
                </div>
                <div className={styles.tabs}>
                    <div className={styles.tabs_group1}>
                        <div className={styles.tab1}>
                            Lorem ipsum, dolor<br/> sit amet consectetur adipisicing. <br/>Officiis, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, quia.
                        </div>
                    </div>
                    <div className={styles.tabs_group2}>
                        <div className={styles.tab3}>
                            <div className={styles.tab2}>
                                Lorem ipsum dolor sit amet.
                            </div>
                            <Link to='/'>
                                <FaPlus size={25} color='fff'/> Подробнее
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

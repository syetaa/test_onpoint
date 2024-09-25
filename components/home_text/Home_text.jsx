import React from 'react'
import styles from './Home_text.module.css'
import { Link } from 'react-router-dom';

import { FaArrowRightLong } from "react-icons/fa6";

export default function Home_text() {
  return (
    <div className={styles.textmain}>

      <div className={styles.text}>
        <span className={styles.hi_text}>Привет,</span>
        <br/>это 
        <span className={styles.no}> не</span> коммерческое задание
      </div>

      <div className={styles.next}>
        <Link to="/page2"><span className={styles.arrow}><FaArrowRightLong color='fff'/></span>Что дальше?</Link>
      </div>
    </div>
  )
}

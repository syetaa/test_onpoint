import React from 'react'
import styles from './Home.module.css'
import Home_text from '../home_text/Home_text'

export default function Home() {
  return (
    <div className={styles.textmain}>
      <Home_text/>
    </div>
  )
}

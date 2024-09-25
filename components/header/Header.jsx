import React from 'react'
import styles from './Header.module.css'

import { VscHome } from "react-icons/vsc";
import { SlHome } from "react-icons/sl";
import { PiLineVerticalLight } from "react-icons/pi";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className={styles.textmain}>
      <div className={styles.icon1}>
        <SlHome size={33}/>
      </div>
      <div className={styles.icon2}>
        <PiLineVerticalLight size={35}/>
      </div>
      <div className={styles.text1}>
        Project
      </div>
    </div>
  )
}

import React from 'react'

import styles from './Page3_comp.module.css'
import Page3_text from '../page3_text/Page3_text'

export default function Page3_comp() {
  return (
    <div>
      <div className={styles.textmain}>
            <div className={styles.img}>
                <img src="/flakon.png" alt="" />
            </div>
            <Page3_text/>
      </div>
    </div>
  )
}

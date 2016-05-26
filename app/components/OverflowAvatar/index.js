/**
*
* OverflowAvatar
*
*/

import React from 'react'
import Avatar from 'material-ui/Avatar'
import styles from './styles.css'

function OverflowAvatar(props) {
  return (
    <div className={styles.overflowAvatar}>
      <Avatar><span className={styles.plus}>+</span><span className={styles.number}>{props.number}</span></Avatar>
    </div>
  )
}

export default OverflowAvatar

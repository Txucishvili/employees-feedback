import React from 'react'
import LogoBg from '../Logo/logo-bg';
import LogoText from '../Logo/LogoText';
import styles from './ScreenLogo.module.scss';

console.log('stl', styles)

export default function ScreenLogo() {
  return (
    <div className={styles['screen-logo'] + ' ' + styles['screen-logo--wrap']}>
      <div className={styles['logo-bg']}>
        <LogoBg />
      </div>
      <div className={styles['logo-text']}>
        <LogoText />
      </div>
    </div>
  )
}

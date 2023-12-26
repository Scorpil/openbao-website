'use client'
import React, { useState } from 'react'
import styles from '@/styles/components/navbar/navbar.module.scss'
import NavbarItems from './NavbarItems'
import NavbarSocial from './NavbarSocial'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__content}>
        <div className={styles.navbar__navigation__wrapper}>
          <div className={styles.navbar__logo}>
            <span>OpenBao</span>
          </div>
          <div className={styles.navbar__menu}>
            <NavbarItems />
          </div>
        </div>
        <div className={styles.navbar__social}>
          <NavbarSocial />
        </div>
      </div>
      <button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className={styles.navbar__toggle}
      >
        <FontAwesomeIcon width={20} height={20} icon={faBars} />
      </button>
    </nav>
  )
}

// todo -- logo to the left always
// background
//animation

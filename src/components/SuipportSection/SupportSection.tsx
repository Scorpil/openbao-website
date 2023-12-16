import React from 'react'
import styles from '@/styles/components/supportSection.module.scss'
import LogoCardGroup from '../LogoCardGroup/LogoCardGroup'
import { logoCardList } from '@/constants/logoCardList'

export default function SupportSection() {
  return (
    <div className={styles.support__section}>
      <h2 className="main__title__h2">Who supports us?</h2>

      <p>
        One <span>2145</span> Two <span>5898</span> Three <span>12</span> Blue{' '}
        <span>95</span>
      </p>

      <LogoCardGroup cards={logoCardList} />
    </div>
  )
}

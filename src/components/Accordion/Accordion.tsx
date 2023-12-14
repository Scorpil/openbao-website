'use client'
import React, { useState } from 'react'
import styles from '@/styles/components/accordion.module.scss'

interface Item {
  title: string
  description: string
}

export default function Accordion(item: Item) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  return (
    <>
      <div className={styles.accordion__item}>
        <div
          className={styles.accordion__item__title}
          onClick={() => setIsExpanded(previsExpanded => !previsExpanded)}
        >
          {item.title}
        </div>
        {isExpanded ? (
          <div className={styles.accordion__item__description}>
            {item.description}
          </div>
        ) : null}
      </div>
    </>
  )
}

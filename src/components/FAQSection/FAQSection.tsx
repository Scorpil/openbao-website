import React from 'react'
import styles from '@/styles/components/faqSection.module.scss'
import Accordion from '../Accordion/Accordion'
// import Button from '../Button/Button'

export default function FAQSection() {
  return (
    <div className={styles.faq__section}>
      <div className="container">
        <h2 className="main__title__h2">Secrets we can share</h2>
        <Accordion
          title="What is OpenBao?"
          description="OpenBao is a community driven project that aims to create a decentralized and open source platform for the Bao community. We are a group of Bao holders that are passionate about the project and want to help it grow."
        />
      </div>
    </div>
  )
}

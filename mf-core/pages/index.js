import Head from 'next/head'
import Image from 'next/image'
import Core from '../components/core'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Core />
    </div>
  )
}

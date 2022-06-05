import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <h3 className={styles.title}>タイトルロゴがどーん</h3>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} >僕です</h1>
      </main>

      <footer className={styles.footer}>
      <p className={styles.description}>カメラが下からグイッとパンして</p>
      </footer>
    </div>
  )
}

export default Home

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Main from '../components/main'
import Time from '../components/time'

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Covid-19 Statistics</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Main/>
      <Time/>
    </div>
  )
}

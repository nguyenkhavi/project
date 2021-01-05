import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Main from '../components/Main'
import Time from '../components/Time'
import { useState, useEffect} from 'react'
import isMobile from '../helpers/isMobile'
import Mobile from '../components/Mobile'


export default function Home() {
  

  return (
    <>
    {isMobile() ? <Mobile/>
    : <div className={styles.container}>
      <Head>
        <title>Covid-19 Statistics</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Main isMobile={Mobile}/>
      <Time/>
    </div>}
    </>
  )
}

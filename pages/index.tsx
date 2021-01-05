import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Main from '../components/Main'
import Time from '../components/Time'
import { useState, useEffect} from 'react'
import useWindowDimensions from '../helpers/useWindowDimensions'


export default function Home() {
  const width = useWindowDimensions().width
  const [Mobile, setMobile] = useState(width && width < 800)

  useEffect(() => {
    setMobile(Mobile)
  },[Mobile])
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Covid-19 Statistics</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Main isMobile={Mobile}/>
      <Time/>
    </div>
    </>
  )
}

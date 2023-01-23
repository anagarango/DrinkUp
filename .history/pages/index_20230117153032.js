import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import Lottie from "lottie-react";
import LoadingAnimation from '../public/loadingCocktail.json'


export default function Home() {
  const [loading, setLoading] = useState("")
  const [data, setData] = useState([])

  const 
  return (
    <>
      <Head>
        <title>DrinkUp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Lottie style={{height:100, width:100}} animationData={LoadingAnimation} loop={true}></Lottie>
        
      </main>
    </>
  )
}

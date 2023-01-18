import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import Lottie from "react-lottie";
import * as animationData from './loadingCocktail.json'


export default function Home() {
  const [loading, setLoading] = useState("")
  return (
    <>
      <Head>
        <title>DrinkUp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Lottie options={{loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },}} height={400} width={400}></Lottie>
        
      </main>
    </>
  )
}

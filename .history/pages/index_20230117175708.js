import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import Lottie from "lottie-react";
import LoadingAnimation from '../public/loadingCocktail.json'
import axios from 'axios';
import styled from 'styled-components';

const Card = styled.div`
  width:20vw;
  height:120px;
  background-color:white;
  display:flex;
  align-items:center;
  flex-direction:column;
  padding
`

const Image = styled.img`
  width:18vw;
  height:90px;
`


export default function Home() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})
  const [cocktails, setCocktails] = useState()

  const url =`https://www.thecocktaildb.com/api/json/v1/1/random.php`



  const GetCocktail = async () => {
    await axios.get(url)
    .then((results) => {
      setLoading(true)
    console.log(results.data.drinks)
    setTimeout(() => {
      setCocktails(results.data.drinks)
    }, 1500);
    setLoading(false)
    }).catch((error)=>{
      console.log(error)
    })
  }

  useEffect(() => {
    
  }, [])

  return (
    <>
      <Head>
        <title>DrinkUp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {loading && <Lottie style={{height:100, width:100}} animationData={LoadingAnimation} loop={true}></Lottie>}
        {cocktails && cocktails.map(
          (o)=>(
            <Card key={o.idDrink}>
              <Image src={o.strDrinkThumb}></Image>
              <p>{o.strDrink}</p>
              
            </Card>
          )
        )}
        <button onClick={()=>GetCocktail()}>Get a Cocktail</button>
      </main>
    </>
  )
}

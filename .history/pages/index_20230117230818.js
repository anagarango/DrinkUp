import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import Lottie from "lottie-react";
import LoadingAnimation from '../public/loadingCocktail.json'
import axios from 'axios';
import styled from 'styled-components';
import Button from '../comps/button';
import { FlexBox } from '../comps/button';

const Card = styled.div`
  width:25vw;
  height:200px;
  background-color:white;
  display:flex;
  align-items:center;
  flex-direction:column;
  padding:10px;
  margin: 20px 0px;
  border-radius:10px;
`

const Image = styled.img`
  width:90%;
`

const Container = styled.div`
  width:80vw;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-around
`



const H4 = styled.h4`

`


export default function Home() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})
  const [cocktails, setCocktails] = useState()
  const [category, setCategory] = useState("")
  const listOfCategories = [
    "Cocktail",
    "Ordinary Drink",
    "Punch \/ Party Drink",
    "Shake",
  ]

  const url =`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`


  const GetCocktail = async () => {
    await axios.get(url)
    .then((results) => {
        setLoading(true);
        setCocktails("");
        setTimeout(() => {
        setCocktails(results.data.drinks);
          setLoading(false)
        }, 1500);
        console.log(results.data.drinks);
        console.log(category);
    }).catch((error)=>{
      console.log(error);
    })
  }

  // useEffect(() => {
    
  // }, [])

  return (
    <>
      <Head>
        <title>DrinkUp</title>
        <meta name="description" content="Making your drink decisions easier" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <button onClick={()=>GetCocktail()}>Get a Cocktail</button>
        <div>
          {listOfCategories.map((o)=>(
            <FlexBox>
              <input type="radio" name="category" value={o} onClick={(event)=>setCategory(event.target.value)}/>
              <label for={o}>{o}</label>
            </FlexBox>
          ))}
           
        </div>
        {loading && <Lottie style={{height:100, width:100}} animationData={LoadingAnimation} loop={true}></Lottie>}
        <Container>
          {cocktails && cocktails.map(
            (o)=>(
              <Card key={o.idDrink}>
                <Image src={o.strDrinkThumb}></Image>
                <H4>{o.strDrink}</H4>
                
              </Card>
            )
          )}
        </Container>
      </main>
    </>
  )
}

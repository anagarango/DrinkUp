import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import Lottie from "lottie-react";
import LoadingAnimation from '../public/loadingCocktail.json'
import axios from 'axios';
import styled from 'styled-components';
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
  const [category, setCategory] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [cocktails, setCocktails] = useState()
  const [newCocktails, setNewCocktails] = useState()
  
  const listOfCategories = [
    "Cocktail",
    "Ordinary Drink",
    "Punch \/ Party Drink",
    "Shake",
  ]

  const listOfIngredients = [
    "Applejack",
    "Gin",
    "Dark rum",
    "Sweet Vermouth",
    "Strawberry Schnapps",
    "Mango",
    "Kiwi",
    "Orange",
    "Lemon"
  ]

  const url =`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`

  const GetCocktail = async () => {
    await axios.get(url)
    .then((results) => {
        setLoading(true);
        setCocktails("");

        let newDrinks = [];
        const drinks = results.data.drinks
        for(var x = 0; x < drinks.length; x++){
          if(drinks[x].strCategory == category){
            for(var i = 1; i <= 15; i++){
              if(drinks[x]['strIngredient'+i] == ingredients){
                newDrinks.push(drinks[x])
              }
            }
          }
        }
        setTimeout(() => {
          setCocktails(results.data.drinks);
          console.log(newDrinks)
          setNewCocktails(newDrinks)
          setLoading(false)
        }, 1500);
      
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
      <FlexBox>
          {listOfIngredients.map((o)=>(
            <FlexBox bgColor={ingredients == o ? "red" : "orange"} borderRpadding="5px" margin="0px 10px" onClick={()=>{setIngredients(o)}}>
              {o}
            </FlexBox>
          ))}
        </FlexBox>
        <FlexBox>
          {listOfCategories.map((o)=>(
            <FlexBox bgColor={category == o ? "red" : "orange"} borderRpadding="5px" margin="0px 10px" onClick={()=>{setCategory(o)}}>
              {o}
            </FlexBox>
          ))}
        </FlexBox>
        <button onClick={()=>GetCocktail()}>The search is over! Find your new favourite drink!</button>   
        {loading && <Lottie style={{height:100, width:100}} animationData={LoadingAnimation} loop={true}></Lottie>}
        <Container>
          {newCocktails && newCocktails.map(
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

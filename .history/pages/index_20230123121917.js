import Head from 'next/head'
import { useEffect, useState } from 'react'
import Lottie from "lottie-react";
import LoadingAnimation from '../public/loadingCocktail.json'
import axios from 'axios';
import styled from 'styled-components';
import { FlexBox, Heading, Paragraph, Image } from '../styles/global';
import Input from '@/comps/input';

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

const Container = styled.div`
  width:80vw;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: ${props=>props.margin}
`



const H4 = styled.h4`

`


export default function Home() {
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [cocktails, setCocktails] = useState()
  const [newCocktails, setNewCocktails] = useState()
  const [search, setSearch] = useState("")
  
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
    "Strawberry schnapps",
    "Mango",
    "Kiwi",
    "Orange juice",
    "Lemon",
    "Cranberry juice",
    "Lime"
  ]

  const url =`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=m`

  const GetCocktail = async () => {
    await axios.get(url)
    .then((results) => {
        setLoading(true);
        setCocktails("");
        setNewCocktails()
        var newDrinks = [];
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

  const SearchCocktail = async (event) => {
    if(event.key == "Enter"){
      await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      .then((results) => {
        setLoading(true);
        setCocktails("");
        setNewCocktails()
        var searchingCocktail = []
        for(var x = 0; x < results.data.drinks.length; x++){
          if(results.data.drinks[x].strCategory == "Cocktail" || results.data.drinks[x].strCategory == "Ordinary Drink" || results.data.drinks[x].strCategory == "Punch \/ Party Drink" || results.data.drinks[x].strCategory == "Shake"){
              searchingCocktail.push(results.data.drinks[x])
            }
          }
          
        setTimeout(() => {
          
          setNewCocktails(searchingCocktail)
          setLoading(false)
        }, 1500);
        
      })
      .catch((error) => {
        console.log(error);
      })
    }
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
      <main>
        <FlexBox position="fixed" top="0" width="100vw" height="70px" bgColor="black" justifyContent="space-between" padding="0px 25px">
          <Heading>DrinkUp</Heading>
          <Input value={search} onChange={event => setSearch(event.target.value)} onKeyDown={SearchCocktail}></Input>
        </FlexBox>
        {/* <NavBar></NavBar> */}
        <FlexBox height="fit-content" width="85vw" maxWidth="830px" position="absolute" boxShadow="0px 0px 3px 4px #FFFFFF, 0px 0px 11px 5px #D255C6, 0px 0px 4px 10px rgba(210, 85, 198, 0.18), inset 0px 0px 4px 3px #FFFFFF, inset 0px 0px 11px 5px #D255C6, inset 0px 0px 4px 10px rgba(210, 85, 198, 0.18)" padding="35px" top="200px" dir="column" bgColor="rgba(0, 0, 0, 0.9)">
            <Heading>Welcome to DrinkUp</Heading>
            <Paragraph padding="10px 0 0 0">Simplifying your Cocktail Preferences</Paragraph>
            <Paragraph padding="30px 0 0 0">DrinkUp, a pain-point that became a project, is inspired to help new-legal aged people to find their favourite cocktails to order in their next pub, bar, and/or nightclub visit. Drink Responsibly!</Paragraph>
        </FlexBox>
        
        
        
        <FlexBox dir="column" height="fit-content" justifyContent="flex-end">
          <Image src="/Hero.jpeg" minHeight="65vh" width="100vw"></Image>
          <Image src="/SecondHero.jpeg" minHeight="calc(100px + 40vh)" width="100vw" margin="-5px 0 0 0" bgPosition="50% 15%"></Image>
          <Image position="absolute" src="/Hero2.png" width="100vw"></Image>
          
        </FlexBox>
        
      <FlexBox>
          {listOfIngredients.map((o)=>(
            <FlexBox bgColor={ingredients == o ? "red" : "orange"} padding="5px" margin="0px 10px" onClick={()=>{setIngredients(o)}}>
              {o}
            </FlexBox>
          ))}
        </FlexBox>
        <FlexBox bgColor="rgba(0, 0, 0, 0.9)" padding="35px">
          {listOfCategories.map((o)=>(
            <FlexBox bgColor={category == o ? "white" : "black"} color={category == o ? "black" : "white"} borderRpadding="5px" margin="0px 10px" onClick={()=>{setCategory(o)}} height="fit-content"boxShadow="0px 0px 3px 4px #FFFFFF, 0px 0px 11px 5px #08F7FE, 0px 0px 4px 10px rgba(0, 247, 254, 0.18), inset 0px 0px 4px 3px #FFFFFF, inset 0px 0px 11px 5px #08F7FE, inset 0px 0px 4px 10px rgba(0, 247, 254, 0.18)" padding="15px" top="200px" dir="column">
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
                <Image src={o.strDrinkThumb} width="90%"></Image>
                <H4>{o.strDrink}</H4>
                
              </Card>
            )
          )}
        </Container>
      </main>
    </>
  )
}
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Lottie from "lottie-react";
import LoadingAnimation from '../public/loadingCocktail.json'
import axios from 'axios';
import styled from 'styled-components';
import { FlexBox, Heading, Paragraph, Image } from '../styles/global';
import Input from '@/comps/input';
import Button from '@/comps/button';
import { neonColours } from '@/styles/neoncolours';

const Card = styled.div`
  width:25vw;
  min-width:210px;
  height:fit-content;
  background-color:black;
  display:flex;
  align-items:center;
  flex-direction:column;
  padding:10px;
  margin: 20px 0px;
  border-radius:10px;
  color:white;
  box-shadow:${props=>props.boxShadow}
`



const H4 = styled.h4`

`


export default function Home() {
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [alcoholic, setAlcoholic] = useState("")
  const [cocktails, setCocktails] = useState()
  const [newCocktails, setNewCocktails] = useState()
  const [search, setSearch] = useState("")
  
  const listOfAlcohol = [
    "Alcoholic",
    "Non alcoholic",
    "Optional alcohol"
  ]

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
        setCocktails();
        setNewCocktails()

        function FilteringCocktails(){
          var matchCocktail = [];
          const drinks = results.data.drinks
          for(var x = 0; x < drinks.length; x++){
            if(drinks[x].strCategory == category && drinks[x].strAlcoholic == alcoholic){
              for(var i = 1; i <= 15; i++){
                if(drinks[x]['strIngredient'+i] == ingredients){
                  matchCocktail.push(drinks[x])
                }
              }
            }
          }
          return matchCocktail
        }
      
        setTimeout(() => {
          setCocktails(results.data.drinks);
          setNewCocktails(FilteringCocktails)
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
        setCocktails();
        setNewCocktails()

        function SearchCocktail(){
          var searchingCocktail = []
          for(var x = 0; x < results.data.drinks.length; x++){
            if(results.data.drinks[x].strCategory == "Cocktail" || results.data.drinks[x].strCategory == "Ordinary Drink" || results.data.drinks[x].strCategory == "Punch \/ Party Drink" || results.data.drinks[x].strCategory == "Shake"){
                searchingCocktail.push(results.data.drinks[x])
            }
          }
          return searchingCocktail
        }
          
        setTimeout(() => {
          setCocktails(results.data.drinks);
          setNewCocktails(SearchCocktail)
          setLoading(false)
        }, 1500);
        
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }

  useEffect(() => {
  }, [])

  return (
    <>
      <Head>
        <title>DrinkUp</title>
        <meta name="description" content="Making your drink decisions easier" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <FlexBox position="fixed" zIndex="10" top="0" width="100vw" height="70px" bgColor="black" justifyContent="space-between" padding="0px 25px">
          <Heading fSize="calc(20px + 50%)">DrinkUp</Heading>
          <Input value={search} onChange={event => setSearch(event.target.value)} onKeyDown={SearchCocktail}></Input>
        </FlexBox>
        
        {/* <NavBar></NavBar> */}
        <FlexBox bgImage="/Hero.jpeg" minHeight="fit-content" height="65vh" width="100vw" margin="70px 0 0 0">
          <FlexBox height="fit-content" width="85vw" maxWidth="830px" boxShadow={neonColours.pinkBox} padding="35px" top="200px" dir="column" bgColor="rgba(0, 0, 0, 0.8)">
            <Heading>Welcome to DrinkUp</Heading>
            <Paragraph padding="10px 0 0 0">Simplifying your Cocktail Preferences</Paragraph>
            <span id="height"></span>
            <Paragraph textAlign="justify" padding="30px 0 0 0">DrinkUp, a pain-point that became a project, is inspired to help new-legal aged people to find their favourite cocktails to order in their next pub, bar, and/or nightclub visit. Drink Responsibly!</Paragraph>
          </FlexBox>
        </FlexBox>
        
        <FlexBox bgImage="/SecondHero.jpeg" minHeight="400px" height="50vw" width="100vw" dir="column" justifyContent="flex-end">
          <Heading width="80vw" padBod="35px">Feel Good About What You Drink</Heading>
          <Image src="/Hero2.png" width="100vw"></Image>
        </FlexBox>
        
        
        <FlexBox dir="column" bgColor="#590067" padding="40px 0" width="100vw">

          <FlexBox bgColor="rgba(0, 0, 0, 0.8)" width="85vw" maxWidth="830px" padding="35px" boxShadow={neonColours.blueBox} dir="column"  margin="0 0 40px 0">
            <Heading textShadow={neonColours.blueText} padding="0 0 25px 0">Categories</Heading>
            <FlexBox flexWrap="wrap">
              {listOfCategories.map((o)=>(
                <Button txt={o} bgColor={category == o ? "white" : "black"} color={category == o ? "black" : "white"} onClick={()=>{setCategory(o)}} height="fit-content" boxShadow={neonColours.blueBox} padding="15px" top="200px" dir="column"/>
              ))}
            </FlexBox>
          </FlexBox>

          <FlexBox bgColor="rgba(0, 0, 0, 0.8)" width="85vw" maxWidth="830px" padding="35px" boxShadow={neonColours.orangeBox} dir="column" margin="0 0 40px 0">
            <Heading textShadow={neonColours.orangeText} padding="0 0 25px 0">Flavours</Heading>
            <FlexBox flexWrap="wrap" >
            {listOfIngredients.map((o)=>(
              <Button txt={o} bgColor={ingredients == o ? "white" : "black"} color={ingredients == o ? "black" : "white"} onClick={()=>{setIngredients(o)}} height="fit-content" boxShadow={neonColours.orangeBox} padding="15px" top="200px" dir="column"/>
            ))}
            </FlexBox>
          </FlexBox>

          <FlexBox bgColor="rgba(0, 0, 0, 0.8)" width="85vw" maxWidth="830px" padding="35px" boxShadow={neonColours.greenBox} dir="column"  margin="0 0 40px 0">
            <Heading textShadow={neonColours.greenText} padding="0 0 25px 0">Alcoholic</Heading>
            <FlexBox flexWrap="wrap">
            {listOfAlcohol.map((o)=>(
              <Button txt={o} bgColor={alcoholic == o ? "white" : "black"} color={alcoholic == o ? "black" : "white"} onClick={()=>{setAlcoholic(o)}} height="fit-content" boxShadow={neonColours.greenBox} padding="15px" top="200px" dir="column"/>
            ))}
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <button onClick={()=>GetCocktail()}>The search is over! Find your new favourite drink!</button>   
          {loading && <Lottie style={{height:100, width:100}} animationData={LoadingAnimation} loop={true}></Lottie>}
          <FlexBox width="100vw">
            <FlexBox overflowX="scroll" justifyContent="flex-start">
            {newCocktails && newCocktails.map(
              (o, index)=>(
                <Card key={o.idDrink} boxShadow={index % 2 == 0 ? neonColours.pinkBox : index % 3 == 0 ? neonColours.greenBox : neonColours.orangeBox}>
                  <Image src={o.strDrinkThumb} width="90%"></Image>
                  <H4>{o.strDrink}</H4>
                  
                </Card>
              )
            )}
            </FlexBox>
          </FlexBox>
          
      </main>
    </>
  )
}

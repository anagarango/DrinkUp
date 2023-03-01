import Head from 'next/head'
import { useEffect, useState, useRef } from 'react'
import Lottie from "lottie-react";
import { motion, useAnimation } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer';
import LoadingAnimation from '@/public/loadingCocktail.json'
import axios from 'axios';
import { listOfAlcohol, listOfCategories, listOfIngredients} from '@/data'
import { FlexBox, Heading, Paragraph, Image, Card, Text } from '@/styles/global';
import { neonColours } from '@/styles/neoncolours';
import NavBar from '@/comps/navbar';
import Form from '@/comps/form';




export default function Home() {
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [alcoholic, setAlcoholic] = useState("")
  const [newCocktails, setNewCocktails] = useState()
  const [activity, setActivity] = useState()
  const [objIngredients, setObjIngredients] = useState([])
  const [cardy, setCardy] = useState({})
  const [search, setSearch] = useState("")

  const control = useAnimation()
  const [ref, inView] = useInView({triggerOnce: true})




  const GetCocktail = async () => {
    var allCocktails = []
    setLoading(true);
    setNewCocktails()

    for(let q = 'a'.charCodeAt(0); q <= 'z'.charCodeAt(0); q++) {
      let letter = String.fromCharCode(q);
        await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
        .then((results) => {
            const drinks = results.data.drinks
            for(var x = 0; x < drinks.length; x++){
              if(drinks[x].strCategory == category && drinks[x].strAlcoholic == alcoholic){
                for(var i = 1; i <= 15; i++){
                  if(drinks[x]['strIngredient'+i] == ingredients){
                    allCocktails.push(drinks[x])
                  }
                }
              }
            }
      
      }).catch((error)=>{
          console.log(error);
      })
    }

    setTimeout(() => {
        setNewCocktails(allCocktails)
        setLoading(false)
    },0);
  }

  const SearchCocktail = async (event) => {
    if(event.key == "Enter"){
      await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      .then((results) => {
        setLoading(true);
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
          setNewCocktails(SearchCocktail)
          setLoading(false)
        }, 1500);
        
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }


  function GetChosen(data){
    setCardy(data);
  }


  const GetActivity = async () => {
    await axios.get('http://www.boredapi.com/api/activity/')
    .then((response) => {
      setActivity(response.data.activity);
      
    }).catch((error)=>{
      console.log(error);
    })
  }


  function objectIngredients(data){
    var objIngredients = []

    for(var i = 1; i <= 15; i++){
      if(data['strIngredient'+i] !== null){
        objIngredients.push(data['strIngredient'+i])

      }
    }
    setObjIngredients(objIngredients)
  }


  useEffect(() => {
    if (inView) {
      control.start({
        opacity: 1,
        scale:1,
        transition: {
          duration:1
        }
      })
    } else {
      control.start({
        opacity: 0,
        scale:0
      })
    }
  }, [control, inView])

  return (
    <>
      <Head>
        <title>DrinkUp</title>
        <meta name="description" content="Making your drink decisions easier" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar value={search} onChange={event => setSearch(event.target.value)} onKeyDown={SearchCocktail}/>

        <FlexBox bgImage="/Hero.jpeg" minHeight="fit-content" height="65vh" width="100vw" margin="70px 0 0 0">
          <FlexBox height="fit-content" width="85vw" maxWidth="830px" boxShadow={neonColours.pinkBox} padding="35px" top="200px" dir="column" bgColor="rgba(0, 0, 0, 0.8)">
            <Heading>Welcome to DrinkUp</Heading>
            <Paragraph padding="10px 0 0 0">Simplifying your Cocktail Preferences</Paragraph>
            <Paragraph textAlign="justify" padding="30px 0 0 0">DrinkUp, a pain-point that became a project, is inspired to help new-legal aged people to find their favourite cocktails to order in their next pub, bar, and/or nightclub visit. Drink Responsibly!</Paragraph>
          </FlexBox>
        </FlexBox>
        
        <FlexBox bgImage="/SecondHero.jpeg" minHeight="400px" height="50vw" width="100vw" dir="column" justifyContent="flex-end">
          <Heading width="80vw" padBod="35px">Feel Good About What You Drink</Heading>
          <Image src="/Hero2.png" width="100vw"></Image>
        </FlexBox>
        
        
        <FlexBox dir="column" bgColor="#590067" padding="40px 0" width="100vw">
            <Form boxShadow={neonColours.blueBox} textShadow={neonColours.blueText} formHeading="Categories" array={listOfCategories} onClick={(event)=>{setCategory(event.target.value)}} state={category} ></Form>
            <Form boxShadow={neonColours.orangeBox} textShadow={neonColours.orangeText} formHeading="Flavours" array={listOfIngredients} onClick={(event)=>{setIngredients(event.target.value)}} state={ingredients} ></Form>
            <Form boxShadow={neonColours.greenBox} textShadow={neonColours.greenText} formHeading="Alcoholic" array={listOfAlcohol} onClick={(event)=>{setAlcoholic(event.target.value)}} state={alcoholic} ></Form>

          <FlexBox zIndex="1" ref={ref} as={motion.div} initial={{opacity:0}} animate={control} padding="25px">
            <FlexBox className='block glow' onClick={()=>GetCocktail()}>The search is over! Find your new favourite drink!</FlexBox>   
          </FlexBox>

          {loading && <Lottie style={{height:300, width:300}} animationData={LoadingAnimation} loop={true}/>}

          <FlexBox width="100vw">
            <FlexBox overflowX="scroll" justifyContent="flex-start" padding="15px">
              {newCocktails && newCocktails.map(
                (o, index)=>(
                  <Card onClick={()=> {GetActivity(); GetChosen(o); objectIngredients(o)}} as={motion.div} whileHover={{scale:1.1}} initial={{opacity:0}} animate={{opacity: 1, transition: {duration:0.2, delay: index/4}}} key={o.idDrink} boxShadow={index % 4 == 0 ? neonColours.pinkBox : index % 3 == 0 ? neonColours.greenBox : index % 2 == 0 ? neonColours.orangeBox : neonColours.blueBox}>
                    <Image src={o.strDrinkThumb} width="90%"></Image>
                    <Text fontSize="18px">{o.strDrink}</Text>
                  </Card> 
                )
              )}
            </FlexBox>  
          </FlexBox>  

          {activity && 
              <FlexBox boxShadow={neonColours.pinkBox} dir="column" alignItems="flex-start" width="850px" height="fit-content" bgColor="rgba(0, 0, 0, 0.65)" padding="3em">
              <FlexBox>
                <Text color="white" fontSize="32px">{cardy.strDrink}</Text>
                <li style={{color:"white", fontSize:"18px", marginLeft:"20px"}}>{cardy.strAlcoholic}</li>
              </FlexBox>
              <FlexBox margin="20px 0 40px 0"><Image src={cardy.strDrinkThumb} width="245px"></Image></FlexBox>
              <FlexBox alignItems="flex-start">
                  <FlexBox dir="column" alignItems="flex-start" width="40%">
                    <Text color="white" fontWeight="bold" fontSize="18px" margin="10px">Ingredients:</Text>
                    <FlexBox dir="column" alignItems="flex-start" margin="10px 0 0 0">{objIngredients.map((ingredient, index) => (<li style={{color:"white", fontSize:"16px"}}>{ingredient}</li>))}</FlexBox>
                  </FlexBox>
                  <FlexBox width="60%" dir="column" alignItems="flex-start">
                    <Text color="white" fontWeight="bold" fontSize="18px">Instructions:</Text>
                    <FlexBox alignItems="flex-start" margin="10px 0 0 0"><Text color="white" fontSize="16px">{cardy.strInstructions}</Text></FlexBox>
                  </FlexBox>
              </FlexBox>
                <FlexBox margin="30px 0 0 0" dir="column">
                  <Text color="white" fontWeight="bold" fontSize="18px" margin="10px">Fun Activity to try after first drink:</Text>
                  {activity &&
                    <Text color="white" fontSize="16px"> {activity}</Text>
                  }
                </FlexBox>
            </FlexBox>
          }
        </FlexBox>
      </main>
    </>
  )
}

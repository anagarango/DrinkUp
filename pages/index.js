import Head from 'next/head'
import { useEffect, useState, useRef } from 'react'
import Lottie from "lottie-react";
import { motion, useAnimation } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer';
import LoadingAnimation from '@/public/loadingCocktail.json'
import axios from 'axios';
import { listOfAlcohol, listOfCategories, listOfIngredients} from '@/data'
import { FlexBox, Heading, Paragraph, Image, Card, Text, TextCursive } from '@/styles/global';
import { neonColours } from '@/styles/neoncolours';
import NavBar from '@/comps/navbar';
import Form from '@/comps/form';
import SelectedResult from '@/comps/selectedResult';




export default function Home() {
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [alcoholic, setAlcoholic] = useState("")
  const [newCocktails, setNewCocktails] = useState()
  const [activity, setActivity] = useState("")
  const [objIngredients, setObjIngredients] = useState([])
  const [objMeasurements, setObjMeasurements] = useState([])
  const [cardy, setCardy] = useState()
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

  const GetActivity = async () => {
    await axios.get('http://www.boredapi.com/api/activity/')
    .then((response) => {
      setActivity(response.data.activity);
      
    }).catch((error)=>{
      console.log(error);
    })
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





  function objectIngredients(data){
    var objIngredients = []
    var objMeasurements = []

    for(var i = 1; i <= 15; i++){
      if(data['strIngredient'+i] !== null){
        objIngredients.push(data['strIngredient'+i])
      }
      if(data['strMeasure'+i] !== null){
        objMeasurements.push(data['strMeasure'+i])
      }
    }
    setObjIngredients(objIngredients)
    setObjMeasurements(objMeasurements)
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
      <FlexBox dir="column" bgImage="/Home.jpg" bgPosition="top" bgRepeat="no-repeat">
        <NavBar value={search} onChange={event => setSearch(event.target.value)} onKeyDown={SearchCocktail}/>

        <FlexBox minHeight="fit-content" height="75vh" width="100vw" margin="70px 0 0 0" padding="0 10% 0 10%" justifyContent="space-between">
          <FlexBox justifyContent="flex-start">
            <Image displayM="none" className="logo" src="/drinkup logo.png" width="62%"></Image>
          </FlexBox>
          <FlexBox height="fit-content" width="70vw" maxWidth="630px" padding="40px 0px 0px 35px" top="200px" dir="column" alignItems="flex-end">
            <Heading fSize="calc(80px + 55%)" fSizesm="4.5rem" textShadow="0 0 0.01em #fff, 0 0 0.015em #fff, 0 0 0.02em #fff, 0 0 0.02em #d900ff, 0 0 0.1em #d900ff, 0 0 0.15em #d900ff, 0 0 0.45em #d900ff, 0 0 0.12em rgb(123 0 255 / 0%)">DrinkUp</Heading>
            <Paragraph textAlign="end" padding="50px 0 0 0" lineHeight="23px">Have little cocktail-knowledge experience or don’t know what the hell to order, well look no further!</Paragraph>
            <Paragraph textAlign="end" padding="30px 0 0 0" lineHeight="23px">Here, you will fill out 3 boxes on your drink preferences, and our smart-finding-your-new-favourite-drink system will recommend you the best cocktails that fill your needs.</Paragraph>
          </FlexBox>
        </FlexBox>
        
        <FlexBox minHeight="100px" height="20vw" heightM="0" marginM="30px" width="100vw" dir="column" justifyContent="flex-start">
          <TextCursive width="80vw" padBod="35px" fSize="20px">The search for the perfect Cocktail is over</TextCursive>
          <Image src="/arrowDown.svg"></Image>
        </FlexBox>
        
        
        <FlexBox dir="column" padding="15px 0" width="100vw">
            <Form boxShadow={neonColours.blueBox} textShadow="white" formHeading="1. Categories" array={listOfCategories} onClick={(event)=>{setCategory(event.target.value)}} state={category} ></Form>
            <Form boxShadow={neonColours.orangeBox} textShadow="white" formHeading="2. Flavours" array={listOfIngredients} onClick={(event)=>{setIngredients(event.target.value)}} state={ingredients} ></Form>
            <Form boxShadow={neonColours.pinkBox} textShadow="white" formHeading="3. Alcoholic" array={listOfAlcohol} onClick={(event)=>{setAlcoholic(event.target.value)}} state={alcoholic} ></Form>

          <FlexBox zIndex="1" ref={ref} as={motion.div} initial={{opacity:0}} animate={control} padding="30px">
            <FlexBox className='block glow' border="rgb(91 6 179) 2px solid" onClick={()=>GetCocktail()} as={motion.div} whileHover={{scale:1.1}} initial={{opacity:0}} animate={{opacity: 1, transition: {duration:0.2}}}>Find your new favourite drink!</FlexBox>   
          </FlexBox>

          {loading && <Lottie style={{height:300, width:300}} animationData={LoadingAnimation} loop={true}/>}

          <FlexBox width="100vw">
            <FlexBox overflowX="scroll" justifyContent="flex-start" padding="100px 0 0 0">
              {newCocktails && newCocktails.map(
                (o, index)=>(
                  <Card onClick={()=> {GetActivity(); GetChosen(o); objectIngredients(o)}} as={motion.div} whileHover={{scale:1.1}} initial={{opacity:0}} animate={{opacity: 1, transition: {duration:0.2, delay: index/4}}} key={o.idDrink} boxShadow={index % 4 == 0 ? neonColours.pinkBox : index % 3 == 0 ? neonColours.greenBox : index % 2 == 0 ? neonColours.orangeBox : neonColours.blueBox}>
                    <Image src={o.strDrinkThumb} width="90%"></Image>
                    <Text padding="15px 0 0 0" fontSize="18px" fontWeight="bold">{o.strDrink}</Text>
                  </Card> 
                )
              )}
            </FlexBox> 

          </FlexBox>  

          {cardy && 
          <SelectedResult cardy={cardy} ingredientArray={objIngredients} measurementArray={objMeasurements} activity={activity}/>
          }
        </FlexBox>
      </FlexBox>
      <footer>
        <FlexBox dir="column" bgColor="#0A0026" padding="30px 0px 15px 0px">
          <Paragraph>DrinkUp© - 2023-2023</Paragraph>
          <Image src='/GitHub.png'></Image>
        </FlexBox>
      </footer>
    </>
  )
}

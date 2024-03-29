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
import Footer from '@/comps/footer';




export default function Home() {
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [alcoholic, setAlcoholic] = useState("")
  const [newCocktails, setNewCocktails] = useState()
  const [activity, setActivity] = useState("")
  const [objIngredients, setObjIngredients] = useState([])
  const [objMeasurements, setObjMeasurements] = useState([])
  const [errorMessage, setErrorMessage] = useState("")
  const [cardy, setCardy] = useState()
  const [search, setSearch] = useState("")
  const [header, setHeader] = useState(false)

  const control = useAnimation()
  const [ref, inView] = useInView({triggerOnce: true})




  const GetCocktail = async () => {
    var allCocktails = []
    setLoading(true);
    setNewCocktails()
    setErrorMessage("")

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
      if(allCocktails.length > 0){
          setNewCocktails(allCocktails)
          setLoading(false)
      } else {
          setErrorMessage("Looks like we can't find drinks with your specifications. Change around one of the inputs for new results.")
          setLoading(false)
      }
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
      setErrorMessage("")
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

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>{
          if(window.pageYOffset > 550){
            setHeader(true)
          } else {
            setHeader(false)
          }
      });
    }

  }, [control, inView])

  return (
    <>
      <Head>
        <title>DrinkUp</title>
        <meta name="description" content="Making your drink decisions easier" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/drinkup logo.png" />
      </Head>
      <FlexBox dir="column" bgImage="/bar.png" bgPosition="top" bgRepeat="no-repeat">
        <NavBar value={search} onChange={event => setSearch(event.target.value)} onKeyDown={SearchCocktail} bgColor={header ? "black" : "transparent"}/>

        <FlexBox id='flex' minHeight="fit-content" height="75vh" width="100vw" margin="70px 0 0 0" padding="0 10%" paddingM="0 5%" justifyContent="space-between">
          <FlexBox justifyContent="flex-start">
            <Image displayM="none" widthM="300px" className="logo" src="/drinkup logo.png" width="62%"></Image>
          </FlexBox>
          <FlexBox height="fit-content" width="70vw" maxWidth="630px" padding="40px 0px 0px 35px" top="200px" dir="column" alignItems="flex-end">
            <Heading id='heading' fSize="calc(80px + 55%)" fSizesm="4.5rem" textShadow="0 0 0.01em #fff, 0 0 0.015em #fff, 0 0 0.02em #fff, 0 0 0.02em #d900ff, 0 0 0.1em #d900ff, 0 0 0.15em #d900ff, 0 0 0.45em #d900ff, 0 0 0.12em rgb(123 0 255 / 0%)">DrinkUp</Heading>
            <Paragraph id='paragraph' textAlign="end" padding="50px 0 0 0" lineHeight="23px">Have little cocktail-knowledge experience or don’t know what the hell to order, well look no further!</Paragraph>
            <Paragraph textAlign="end" padding="30px 0 0 0" lineHeight="23px">Here, you will fill out 3 boxes on your drink preferences, and our smart-finding-your-new-favourite-drink system will recommend you the best cocktails that fill your needs.</Paragraph>
          </FlexBox>
        </FlexBox>
        
        <FlexBox minHeight="100px" height="20vw" heightM="0" marginM="30px" width="100vw" dir="column" justifyContent="flex-start">
          <TextCursive width="80vw" padBod="30px" fSize="20px">The search for the perfect Cocktail is over</TextCursive>
          <Image src="/arrowDown.gif" width="70px"/>
        </FlexBox>
        
        
        <FlexBox dir="column" padding="15px 0 0 0" width="100vw">
            <Form boxShadow={neonColours.blueBox} textShadow="white" formHeading="1. Categories" array={listOfCategories} onClick={(event)=>{setCategory(event.target.value)}} state={category} ></Form>
            <Form boxShadow={neonColours.orangeBox} textShadow="white" formHeading="2. Ingredient" array={listOfIngredients} onClick={(event)=>{setIngredients(event.target.value)}} state={ingredients} boxShadowHover="0px 0px 3px 3px #FFFFFF, 0px 0px 9px 7px #803f16, 0px 0px 6px 6px rgba(233, 114, 39, 0.18), inset 0px 0px 3px 3px #FFFFFF, inset 0px 0px 9px 7px #803f16, inset 0px 0px 6px 6px rgba(233, 114, 39, 0.18)"></Form>
            <Form boxShadow={neonColours.pinkBox} textShadow="white" formHeading="3. Alcoholic" array={listOfAlcohol} onClick={(event)=>{setAlcoholic(event.target.value)}} state={alcoholic} boxShadowHover="0px 0px 3px 3px #FFFFFF, 0px 0px 9px 7px #752d6e, 0px 0px 6px 6px rgba(210, 85, 198, 0.18), inset 0px 0px 3px 3px #FFFFFF, inset 0px 0px 9px 7px #752d6e, inset 0px 0px 6px 6px rgba(210, 85, 198, 0.18)"></Form>

          <FlexBox zIndex="1" ref={ref} as={motion.div} initial={{opacity:0}} animate={control} padding="30px">
            <FlexBox className='block glow' border="rgb(91 6 179) 2px solid" onClick={()=>GetCocktail()} as={motion.div} whileHover={{scale:1.1}} initial={{opacity:0}} animate={{opacity: 1, transition: {duration:0.2}}}>Find your new favourite drink!</FlexBox>   
          </FlexBox>

          {loading && <Lottie style={{height:300, width:300}} animationData={LoadingAnimation} loop={true}/>}

          <FlexBox width="100vw" dir="column" padding="100px 0 0 0">
            <FlexBox justifyContent="flex-start" width="fit-content" maxWidth="100%" overflowX="scroll">
              {newCocktails && newCocktails.map(
                (o, index)=>(
                  <Card onClick={()=> {GetActivity(); GetChosen(o); objectIngredients(o)}} as={motion.div} whileHover={{scale:1.1}} initial={{opacity:0}} animate={{opacity: 1, transition: {duration:0.2, delay: index/4}}} key={o.idDrink} boxShadow={index % 4 == 0 ? neonColours.pinkBox : index % 3 == 0 ? neonColours.greenBox : index % 2 == 0 ? neonColours.orangeBox : neonColours.blueBox}>
                    <Image src={o.strDrinkThumb} width="90%"></Image>
                    <Text padding="15px 0 0 0" fontSize="18px" fontWeight="bold">{o.strDrink}</Text>
                  </Card> 
                )
              )}
              {errorMessage && 
                  <FlexBox maxWidth="400px" height="fit-content" bgColor="rgba(0,0,0,0.8)" padding="50px" margin="0 0 90px 0">
                    <Heading fSize="25px" width="fit-content" height="fit-content" color="white">Looks like we can't find drinks with your specifications. Change around one of the inputs for new results</Heading>
                  </FlexBox>
              }
            </FlexBox> 
            <Image alt="Stone Table" src="/StoneTable.png" height={150} width={300} style={{width:"100%", margin:"-100px 0 0 0"}}/>
            
            <FlexBox height={150} width={300} style={{width:"200%", height:"100%"}} className='StoneWall' alt="Stone Wall" bgImage="/StoneWall.png" padding="0 0 50px 0">
              {cardy && 
              <SelectedResult cardy={cardy} ingredientArray={objIngredients} measurementArray={objMeasurements} activity={activity}/>
              }
            </FlexBox>

          </FlexBox>  

          
        </FlexBox>
      </FlexBox>
      <Footer />
    </>
  )
}

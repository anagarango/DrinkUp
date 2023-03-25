import Head from 'next/head'
import { useEffect, useState, useRef } from 'react'
import Footer from '@/comps/footer';
import Poster from '@/comps/poster';
import { FlexBox, Heading, Paragraph, Image, Card, Text, TextCursive, Spacer } from '@/styles/global';
import NavBar from '@/comps/navbar';
import VancouverClubs from '../data/vancouverclubs.json'

export default function Clubs(){
    const [header, setHeader] = useState(false)

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    useEffect(() => {
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", () =>{
            if(window.pageYOffset > 550){
              setHeader(true)
            } else {
              setHeader(false)
            }
        });
      }
  
    },[])
    return(
        <>
      <Head>
        <title>DrinkUp - Clubs</title>
        <meta name="description" content="Checkout these clubs to dance with your new favourite drink with!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/drinkup logo.png" />
      </Head>
      <main>
            <NavBar display={false} bgColor={header ? "black" : "transparent"}/>
            <FlexBox bgImage="/brickwall.jpeg" bgPosition="bottom" bgSize="contain" bgRepeat="repeat" width="100%" height="10%" justifyContent="center" flexWrap="wrap">
                <FlexBox background="linear-gradient(black, transparent, transparent, transparent, transparent, transparent, transparent, black);" width="100%" height="10%" padding="500px 0">
                    <FlexBox dir="column" width="100%" alignItems="center" maxWidth="500px">
                        {VancouverClubs.map((o,i)=>{
                            if(i % 2 == 0){
                                return(
                                    <Poster onClick={()=>openInNewTab(o.link)} bgImage={`/posters/poster${i}.jpeg`} margin="400px 0 0 0" overlay='rgba(94, 1, 90, 0.6)' name={o.name} caption={o.caption} image={o.image} address={o.address} />
                                )
                            }
                        })}
                    </FlexBox>
                    <FlexBox dir="column" width="100%" alignItems="center" maxWidth="500px">
                        {VancouverClubs.map((o,i)=>{
                            if(i % 2 !== 0){
                                return(
                                    <Poster onClick={()=>openInNewTab(o.link)} bgImage={`/posters/poster${i}.jpeg`} margin="0 0 400px 0" overlay='rgba(43, 0, 135, 0.6)' name={o.name} caption={o.caption} image={o.image} address={o.address} />
                                )
                            }  
                        })}
                    </FlexBox>
                </FlexBox>
            </FlexBox>
            <Footer />
      </main>
    </>
    )
}
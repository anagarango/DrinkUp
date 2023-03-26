import Head from 'next/head'
import { useEffect, useState, useRef } from 'react'
import Footer from '@/comps/footer';
import Button from '@/comps/button';
import { FlexBox, Heading, Paragraph, Image, TextCursive, Spacer } from '@/styles/global';
import NavBar from '@/comps/navbar';

export default function Home() {
  const [header, setHeader] = useState(false)

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

  return (
    <>
      <Head>
        <title>DrinkUp</title>
        <meta name="og:drinkup" content="Making your drink decisions easier" />
        <meta property="og:title" content="Final Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/drinkup logo.png" />
      </Head>
      <main>
            <NavBar display={false} bgColor={header ? "black" : "transparent"}/>
            <FlexBox id='image' bgImage="/Hero.png" bgPosition="bottom" bgRepeat="no-repeat" className="homehero" minHeight="90vh" height="fit-content" width="100vw" justifyContent="center" padding="80px 0 0 0">
                <FlexBox height="fit-content" width="50%" dir="column" alignItems="flex-start" maxWidth="600px">
                    <Heading fSize="calc(70px + 45%)" fSizesm="4.5rem" textShadow="0 0 0.01em #fff, 0 0 0.015em #fff, 0 0 0.02em #fff, 0 0 0.02em #d900ff, 0 0 0.1em #d900ff, 0 0 0.15em #d900ff, 0 0 0.45em #d900ff, 0 0 0.12em rgb(123 0 255 / 0%)">DrinkUp</Heading>
                    <TextCursive id="textCursive" fSize="25px" textAlign="start">Simplifying your Cocktail Preferences</TextCursive>
                    <Paragraph id="textParagraph" textAlign="start" padding="20px 0 0 0" lineHeight="23px">A pain-point that became a project, inspired to help new-legal aged people to find their favourite cocktails to order in their next pub, bar, and/or nightclub visit.</Paragraph>
                    <Button href="/quiz" bgColor='transparent' txt="Start Now" padding='15px 50px' margin="35px 0 0 0"></Button>
                </FlexBox>
                <FlexBox justifyContent="flex-start" width="50%" maxWidth="400px" margin="0 0 50px 0">
                    <Image className="logo" src="/drinkup logo.png" width="100%" />
                </FlexBox>
            </FlexBox>
            <FlexBox margin="-30px 0 0 0" height="20vw" heightM="0" marginM="30px" width="100vw" dir="column" justifyContent="flex-start">
              <TextCursive width="80vw" padBod="20px" fSize="20px">Looking for nightclubs?</TextCursive>
              <Image src="/arrowDown.gif" width="70px"/>
            </FlexBox>
            <FlexBox dir='column'>
                <Image src='/HomeBack.png' width={250} height={250} style={{height:"100%", width:"120%", minHeight:"400px"}}/>
                <Image className='cocktailhome' src='/Cocktails.png' width={250} height={250} style={{height:"100%", width:"100%", minHeight:"300px", margin:"-30% 0 0 0"}} />
            </FlexBox>
            <FlexBox bgImage="/HomeCounter.png" bgPosition="bottom" bgRepeat="no-repeat" style={{height:"100%", width:"100vw", minHeight:"fit-content"}}>
                <FlexBox dir='column' className='block glow' zIndex="1" margin="200px 0">
                    <FlexBox width="100%" height="100%" padding="100px 70px" bgColor="rgba(0,0,0,0.85)" dir='column'>
                        <TextCursive>Wanna party at the club?</TextCursive>
                        <Button href="/clubs" bgColor='transparent' txt="Heck Yeah!" padding='15px 50px' margin="35px 0 0 0" boxShadow="0px 0px 3px 3px #FFFFFF, 0px 0px 9px 7px #D255C6, 0px 0px 6px 6px rgba(210, 85, 198, 0.18), inset 0px 0px 3px 3px #FFFFFF, inset 0px 0px 9px 7px #D255C6, inset 0px 0px 6px 6px rgba(210, 85, 198, 0.18)" boxShadowHover="0px 0px 3px 3px #FFFFFF, 0px 0px 9px 7px #6b1a63, 0px 0px 6px 6px rgba(210, 85, 198, 0.18), inset 0px 0px 3px 3px #FFFFFF, inset 0px 0px 9px 7px #6b1a63, inset 0px 0px 6px 6px rgba(210, 85, 198, 0.18)"/>
                    </FlexBox>
                </FlexBox>
            </FlexBox>
        <Footer />
      </main>
    </>
  )
}

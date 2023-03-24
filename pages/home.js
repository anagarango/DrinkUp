import Head from 'next/head'
import { useEffect, useState, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import { FlexBox, Heading, Paragraph, Image, Card, Text, TextCursive } from '@/styles/global';
import NavBar from '@/comps/navbar';




export default function Home() {
  const [search, setSearch] = useState("")
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
        <meta name="description" content="Making your drink decisions easier" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FlexBox dir="column" bgImage="/Home.jpg" bgPosition="top" bgRepeat="no-repeat">
        <NavBar display={false}/>
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

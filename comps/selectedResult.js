import { FlexBox, Text, Heading, Image } from "@/styles/global"
import { neonColours } from "@/styles/neoncolours"
import { useState, useEffect } from "react"

export default function SelectedResult({
    cardy,
    activity,
    ingredientArray,
    measurementArray
}){
    const [youtubeLink, setYoutubeLink] = useState(null)
        

    useEffect(()=>{
        if(cardy.strVideo){
            setYoutubeLink(cardy.strVideo.replace("watch?v=", "embed/"))
            console.log(youtubeLink)
        }
    },[])
        
    return(
        <FlexBox boxShadow={neonColours.pinkBox} dir="column" alignItems="flex-start" width="90vw" maxWidth="850px" height="fit-content" bgColor="rgba(0, 0, 0, 0.65)" padding="3em">
            <FlexBox>
                <Heading textShadow={neonColours.pinkText} fontSize="32px">{cardy.strDrink}</Heading>
                <li style={{color:"white", fontSize:"18px", marginLeft:"20px"}}>{cardy.strAlcoholic}</li>
            </FlexBox>
            
            <FlexBox margin="20px 0 40px 0" width="100%" height="fit-content" justifyContent="space-between">
                <Image src={cardy.strDrinkThumb} width="40%"/>
                {cardy.strVideo && <div style={{position:"relative", paddingTop:"40%", width:"55%", display:"flex"}}>
                        <iframe src={youtubeLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen style={{position: "absolute", top: 0, left: 0, width:"100%", height: "100%"}}></iframe>
                    </div>
                }
            </FlexBox>

            <FlexBox alignItems="flex-start" width="100%">
                <FlexBox dir="column" alignItems="flex-start" width="40%">
                    <Text color="white" fontWeight="bold" fontSize="18px" >Ingredients:</Text>
                    <FlexBox padding="5px 0 0 15px">
                        <FlexBox dir="column" justifyContent="flex-start" alignItems="flex-start" minHeight="60px" padding="0 7px 0 0">
                            {measurementArray.map((measurement, index) => (
                                <li key={index} style={{color:"white", fontSize:"16px"}}>{measurement}</li>
                            ))}
                        </FlexBox>
                        
                        <FlexBox dir="column" justifyContent="flex-start" alignItems="flex-start" minHeight="60px">
                            {ingredientArray.map((ingredient, index) => (
                                <li key={index} style={{color:"white", fontSize:"16px", listStyle: "none"}} >{ingredient}</li>
                            ))}
                        </FlexBox>
                    </FlexBox>
                </FlexBox>
                
                <FlexBox dir="column" alignItems="flex-start" width="60%" >
                    <Text color="white" fontWeight="bold" fontSize="18px">Instructions:</Text>
                    <Text padding="5px 0 0 15px" color="white" fontSize="16px">{cardy.strInstructions}</Text>
                </FlexBox>
            </FlexBox>

            <Text width="100%" color="white" fontWeight="bold" fontSize="18px">Fun Activity to try after your first drink (unless it's unsafe or unlawful to do so) :</Text>
            <Text padding="5px 0 0 15px" color="white" fontSize="16px">{activity}</Text>
        </FlexBox>
    )
}
import { FlexBox, Heading, Image } from "@/styles/global"
import Input from "./input"
import { neonColours } from '@/styles/neoncolours';

export default function NavBar({
    value="",
    display,
    bgColor,
    onChange = ()=>{},
    onKeyDown = ()=>{}
}){
    return(
        <FlexBox position="fixed" top="0" width="100vw" height="70px" justifyContent="space-between" padding="0px 25px" zIndex="2" bgColor={bgColor}>
          <a href="/">
            <FlexBox>
              <Image className="logoMobile" src="/drinkup logo.png" width="60px"></Image>
              <Heading className="discoball" textShadow={neonColours.pinkText}>DrinkUp</Heading>
            </FlexBox>
          </a>
          <Image className="discoball" src="/disco.png" width="170px" margin="120px 0 0 0" />
          <Input value={value} onChange={onChange} onKeyDown={onKeyDown} placeholder="Search for Cocktail name" display={display}></Input>    
        </FlexBox>
    )
}
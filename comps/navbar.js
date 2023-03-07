import { FlexBox, Heading, Image } from "@/styles/global"
import Input from "./input"
import { neonColours } from '@/styles/neoncolours';

export default function NavBar({
    value="",
    onChange = ()=>{},
    onKeyDown = ()=>{}
}){
    return(
        <FlexBox position="fixed" top="0" width="100vw" height="70px" justifyContent="space-between" padding="0px 25px" zIndex="2">
          <FlexBox>
          <Image className="logoMobile" src="/drinkup logo.png" width="60px"></Image>
          <Heading textShadow={neonColours.pinkText} onClick={()=>{"/"}}>DrinkUp</Heading>
          </FlexBox>
          <Input value={value} onChange={onChange} onKeyDown={onKeyDown}></Input>
        </FlexBox>
    )
}
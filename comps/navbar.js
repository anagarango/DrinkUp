import { FlexBox, Heading } from "@/styles/global"
import Input from "./input"

export default function NavBar({
    value="",
    onChange = ()=>{},
    onKeyDown = ()=>{}
}){
    return(
        <FlexBox position="fixed" top="0" width="100vw" height="70px" bgColor="black" justifyContent="space-between" padding="0px 25px" zIndex="2">
          <Heading>DrinkUp</Heading>
          <Input value={value} onChange={onChange} onKeyDown={onKeyDown}></Input>
        </FlexBox>
    )
}
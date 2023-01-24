import { FlexBox, Heading, Input } from "@/styles/global"

export default function NavBar({
    value,
    onChange = ()=>{},
    onKeyDown = ()=>{}
}){

    return(
        <FlexBox position="fixed" top="0" width="100vw" height="70px" bgColor="black" justifyContent="space-between" padding="0px 25px">
          <Heading>DrinkUp</Heading>
          <Input value={value} onChange={onChange} onKeyDown={onKeyDown}></Input>
        </FlexBox>
    )
}
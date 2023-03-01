import { FlexBox, Heading } from "@/styles/global"
import Button from "./button"

export default function Form({
    boxShadow="",
    textShadow="",
    formHeading="",
    array=[],
    state="",
    onClick=()=>{}

}){
    return(
        <FlexBox bgColor="rgba(0, 0, 0, 0.8)" width="85vw" maxWidth="830px" padding="35px" boxShadow={boxShadow} dir="column"  margin="0 0 40px 0">
            <Heading textShadow={textShadow} padding="0 0 25px 0">{formHeading}</Heading>
            <FlexBox flexWrap="wrap">
              {array.map((o, index)=>(
                <Button value={o} key={index} txt={o} bgColor={state == o ? "white" : "black"} color={state == o ? "black" : "white"} onClick={onClick} height="fit-content" boxShadow={boxShadow} padding="15px" top="200px" dir="column"></Button>
               ))}
            </FlexBox>
          </FlexBox>
    )
}
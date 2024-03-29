import styled from "styled-components";
import { FlexBox } from "@/styles/global";

export default function Input({
    type = "text",
    placeholder = "Search",
    width = "70%",
    boxShadow = "0px 0px 2px 2px #FFFFFF, 0px 0px 8px 6px #D255C6, 0px 0px 10px 10px rgba(210, 85, 198, 0.18), inset 0px 0px 2px 2px #FFFFFF, inset 0px 0px 8px 6px #D255C6, inset 0px 0px 10px 10px rgba(210, 85, 198, 0.18)",
    border = "1px solid #FFFFFF",
    bgColor = "rgba(0, 0, 0, 0.65)",
    height = "40px",
    onKeyDown = ()=>{},
    onChange = ()=>{},
    value,
    display = true
}) {

    if(display){
        return(
            <FlexBox width={width} height={height} boxShadow={boxShadow} border={border} backgroundColor={bgColor} maxWidth="230px">
                <input id="navbarinput" value={value} onChange={onChange} onKeyDown={onKeyDown} type={type} placeholder={placeholder} style={{backgroundColor:"rgba(0, 0, 0, 0)", width:"calc(85%)", fontFamily: "Montserrat", fontSize:"15px", color:"white", border:"0px"}}></input>
            </FlexBox>
        )
    }  else {
        return(
            <FlexBox width={width} height={height} boxShadow={boxShadow} border={border} backgroundColor={bgColor} maxWidth="230px" visibility="hidden">
                <input id="navbarinput" value={value} onChange={onChange} onKeyDown={onKeyDown} type={type} placeholder={placeholder} style={{backgroundColor:"rgba(0, 0, 0, 0)", width:"calc(85%)", fontFamily: "Montserrat", fontSize:"15px", color:"white", border:"0px"}}></input>
            </FlexBox>
        )
    }
}
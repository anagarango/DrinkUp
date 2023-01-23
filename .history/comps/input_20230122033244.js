import styled from "styled-components";
import { FlexBox } from "@/styles/global";

export default function Input({
    type = "text",
    placeholder = "Search",
    width = "calc(100px + 5%)",
    boxShadow = "0px 0px 3px 4px #FFFFFF, 0px 0px 11px 5px #D255C6, 0px 0px 4px 10px rgba(210, 85, 198, 0.18), inset 0px 0px 4px 3px #FFFFFF, inset 0px 0px 11px 5px #D255C6, inset 0px 0px 4px 10px rgba(210, 85, 198, 0.18)",
    border = "1px solid #FFFFFF",
    bgColor = "rgba(0, 0, 0, 0.65)",
    height = "50px"
}) {

    return(
        <FlexBox width={width} height={height} boxShadow={boxShadow} border={border} backgroundColor={bgColor}>
            <input type={type} placeholder={placeholder} style={{backgroundColor:"black", width:"calc(80px + 8%)"}} ></input>
        </FlexBox>

    )
}
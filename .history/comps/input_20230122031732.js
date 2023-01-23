import styled from "styled-components";
import { FlexBox } from "@/styles/global";

export default function Input({
    type = "text",
    placeholder = "Search",
    width = "calc(200px + 5%)",
    boxShadow = "",
    border = "1px solid #FFFFFF",
    bgColor = "rgba(0, 0, 0, 0.65)",
    height = "50px"
}) {

    return(
        <input type={type} placeholder={placeholder} style={{width:{width}, height:{height}, boxShadow:"5px 10px #888888", border:{border}, backgroundColor:{bgColor}, height:{height}}} ></input>
    )
}
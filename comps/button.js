import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import {FlexBox} from "../styles/global"

export default function Button({
  txt = "Button Text Here",
  size = "15px",
  color = "white",
  bgColor = "#ffffff",
  width = "150px",
  height = "40px",
  padding = "15px",
  borderRadius = "16px",
  textAlign = "center",
  margin = "5px 5px 8px 5px",
  fontWeight = "600",
  value = "nothing",
  border = "none",
  cursor = "pointer",
  minWidth,
  maxWidth,
}) {

  // if (ifThisIsTheCategoriesButtons && !registerValue) {
  //   if (whatIsTheStateOfTheAppForCategory == value) {
  //     bgColor = "#4F4DB0";
  //     color = "white";
  //     border = "2px solid white";
  //     axios.post("/api/setSellerStatus", { value });
  //   }
  // }

  const ButtonClick = styled(FlexBox)`
    color: ${(props) => props.color};
    text-align: ${(props) => props.textAlign};
    font-weight: ${(props) => props.fontWeight};
    border: ${(props) => props.border};
    font-size: ${(props) => props.fzsize};
    max-width: ${(props) => props.maxWidth};
    min-width: ${(props) => props.minWidth};
  `;

  return (
        <ButtonClick
          onClick={onClose}
          fzsize={size}
          width={width}
          height={height}
          bgColor={bgColor}
          padding={padding}
          borderRadius={borderRadius}
          color={color}
          textAlign={textAlign}
          margin={margin}
          fontWeight={fontWeight}
          border={border}
          cursor={cursor}
          minWidth={minWidth}
          maxWidth={maxWidth}
        >
          {txt}
        </ButtonClick>
  );
}
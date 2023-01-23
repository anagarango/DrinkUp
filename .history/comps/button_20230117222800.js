import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { useState } from "react";
import axios from "axios";

export const Icons = styled(Icon)`
  padding: ${(props) => props.buttonMargin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
const ButtonClick = styled(FlexBox)`
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
  font-weight: ${(props) => props.fontWeight};
  border: ${(props) => props.border};
  font-size: ${(props) => props.fzsize};
`;

export const FlexBox = styled.div`
    display:flex;
    justify-content:${props=>props.justifyContent || "center"};
    align-items:${props=>props.alignItems || "center"};
    flex-direction:${props=>props.dir || "row"};
    flex-wrap: ${props=>props.flexWrap};
    width: ${props=>props.width};
    height: ${props=>props.height};
    background-color: ${props=>props.bgColor};
    padding: ${props=>props.padding};
    margin: ${props=>props.margin || "0px"};
    min-height: ${props=>props.minHeight};
    max-height: ${props=>props.maxHeight};
    background-image: ${props=>props.linearGradient || "none"}, url(${props=>props.bgImage});
    background-position: ${props=>props.bgPosition || "center"};
    background-size: ${props=>props.bgSize || "cover"};
    background-repeat: ${props=>props.bgRepeat};
    border-radius:${props=>props.borderRadius};
    filter: ${props=>props.filter};
    border: ${props=>props.border};
    z-index:${props=>props.zIndex};
    position: ${props=>props.position};
    top: ${props=>props.top};
    left:${props=>props.left};
    bottom: ${props=>props.bottom};
    border-bottom-style: ${props=>props.borderBottom};
    box-shadow: ${props=>props.boxShadow};
    border-top: ${props=>props.topBorder};
    border-bottom: ${props=>props.bottomBorder};
    color: ${props=>props.color};
    font-weight: ${props=>props.fontWeight};
    cursor: ${props=>props.cursor};
    max-width: ${props=>props.maxWidth};
    min-width: ${props=>props.minWidth};
    overflow-y: ${props=>props.overflowY};
    overflow-anchor: ${props=>props.overflowA};
    overflow-x: ${props=>props.overflowX};
`

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
  whatIsTheStateOfTheAppForCategory,
  fontWeight = "600",
  value = "nothing",
  border = "none",
  iconName = "add",
  ifThisIsTheCategoriesButtons = "false",
  onClick = () => {},
  onKeywordWantToRemove = () => {},
  onRemoveKeyword = () => {},
  type = "button",
  buttonMargin = "0px",
  cursor = "pointer",
  minWidth,
  maxWidth,
  onNext = () => {},
  onPrev = () => {},
  onClose,
  registerValue = false,
  statusValue = false,
}) {
  if (ifThisIsTheCategoriesButtons && !registerValue) {
    if (whatIsTheStateOfTheAppForCategory == value) {
      bgColor = "#4F4DB0";
      color = "white";
      border = "2px solid white";
      axios.post("/api/setSellerStatus", { value });
    }
  }

  if (ifThisIsTheCategoriesButtons && registerValue) {
    if (whatIsTheStateOfTheAppForCategory == value) {
      bgColor = "white";
      color = "#4F4DB0";
      border = "2px solid #4F4DB0";
      axios.post("/api/setSellerStatus", { value });
    }
  }

  if (statusValue) {
    if (whatIsTheStateOfTheAppForCategory == value) {
      bgColor = "#4F4DB0";
      color = "white";
      border = "2px solid #4F4DB0";
    }
  }

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
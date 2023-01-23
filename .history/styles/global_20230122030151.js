import styled from "styled-components";

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

export const Heading = styled.h1`
    font-family: 'Train One', cursive;  
    font-size:${props=>props.fSize || "60px"};
    font-weight:${props=>props.fWeight};
    color:${props=>props.color};
    padding:${props=>props.padding};
    width:${props=>props.width};
    position: ${props=>props.position};
    top:${props=>props.top};
    left:${props=>props.left};
    margin:${props=>props.margin};
    cursor:${props=>props.cursor};
    text-shadow:${props=>props.textShadow || "0 0 0.1em #fff, 0 0 0.2em #fff, 0 0 0.3em #fff, 0 0 0.4em rgb(176, 119, 255),0 0 0.6em rgb(123, 0, 255), 0 0 0.8em rgb(123, 0, 255), 0 0 1.0em rgb(123, 0, 255), 0 0 1.2em rgb(123, 0, 255)"};
    color:white
  `
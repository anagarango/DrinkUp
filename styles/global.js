import styled from "styled-components";

export const FlexBox = styled.div`
    display:flex;
    justify-content:${props=>props.justifyContent || "center"};
    align-items:${props=>props.alignItems || "center"};
    flex-direction:${props=>props.dir || "row"};
    flex-wrap: ${props=>props.flexWrap};
    width: ${props=>props.width};
    height: ${props=>props.height};
    @media (max-width: 820px){
      padding: ${props=>props.paddingM || props.padding};
    }
    @media (max-width: 480px) {
      height:${props=>props.heightM || props.height};
      margin: ${props=>props.marginM || props.margin};
    }
    &:hover {
      background-color: ${props=>props.bgColorHover};
      transform:${props=>props.transformHover};
      transition:${props=>props.transitionHover}
    }
    background-color: ${props=>props.bgColor};
    padding: ${props=>props.padding};
    margin: ${props=>props.margin || "0px"};
    min-height: ${props=>props.minHeight};
    background-image: url(${props=>props.bgImage});
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
    z-index: ${props=>props.zIndex};
    visibility: ${props=>props.visibility};
    background: ${props=>props.background}
`

export const Heading = styled.h1`
    font-family: ${props=>props.fontFamily || "'Train One', cursive"};
    font-size:${props=>props.fSize || "calc(30px + 55%)"};
    @media (max-width: 480px) {
      font-size:${props=>props.fSizesm || props.fSize || "2rem"};
    }
    font-weight:${props=>props.fWeight};
    color:${props=>props.color};
    padding:${props=>props.padding};
    width:${props=>props.width};
    position: ${props=>props.position};
    top:${props=>props.top};
    left:${props=>props.left};
    margin:${props=>props.margin};
    cursor:${props=>props.cursor};
    text-shadow:${props=>props.textShadow || "0 0 0.01em #fff, 0 0 0.015em #fff, 0 0 0.02em #fff, 0 0 0.02em rgb(176, 119, 255),0 0 0.1em rgb(123, 0, 255), 0 0 0.15em rgba(123, 0, 255,1), 0 0 0.45em rgb(123, 0, 255,1), 0 0 0.12em rgba(123, 0, 255,0)"};
    color:white;
    letter-spacing:2px;
    text-align:${props=>props.textAlign || "center"};
    padding-bottom:${props=>props.padBod}
  `

export const Paragraph = styled.p`
    font-family: 'Montserrat', cursive;  
    font-size:${props=>props.fSize || "16px"};
    font-weight:${props=>props.fWeight};
    color:${props=>props.color};
    padding:${props=>props.padding};
    width:${props=>props.width};
    position: ${props=>props.position};
    top:${props=>props.top};
    left:${props=>props.left};
    margin:${props=>props.margin};
    cursor:${props=>props.cursor};
    text-shadow:${props=>props.textShadow};
    color:${props=>props.color || "white"};
    text-align:${props=>props.textAlign || "center"};
    line-height: ${props=>props.lineHeight};
`

export const TextCursive = styled.h1`
    font-family: 'Nothing You Could Do', cursive;
    font-size:${props=>props.fSize || "calc(30px + 55%)"};
    font-weight:${props=>props.fWeight};
    color:${props=>props.color};
    padding:${props=>props.padding};
    width:${props=>props.width};
    position: ${props=>props.position};
    top:${props=>props.top};
    left:${props=>props.left};
    margin:${props=>props.margin};
    cursor:${props=>props.cursor};
    text-shadow:${props=>props.textShadow || "0 0 0.01em #fff, 0 0 0.015em #fff, 0 0 0.02em #fff, 0 0 0.02em rgb(176, 119, 255),0 0 0.1em rgb(123, 0, 255), 0 0 0.15em rgba(123, 0, 255,1), 0 0 0.45em rgb(123, 0, 255,1), 0 0 0.12em rgba(123, 0, 255,0)"};
    color:white;
    letter-spacing:2px;
    text-align:${props=>props.textAlign || "center"};
    padding-bottom:${props=>props.padBod}
  `


export const Image = styled.img`
    min-height:${props=>props.minHeight};
    max-height:${props=>props.maxHeight};
    height:${props=>props.height};
    width:${props=>props.width};
    object-fit: ${props=>props.bgSize || "cover"};
    object-position: ${props=>props.bgPosition};
    background-repeat: no-repeat;
    margin:${props=>props.margin};
    display:${props=>props.display || "flex"};
    @media (max-width: 480px){
      display:${props=>props.displayM || props.display || "flex"};
      margin: ${props=>props.marginM || props.margin};
    }
    @media (max-width: 820px){
      margin: ${props=>props.marginM || props.margin};
      width: ${props=>props.widthM || props.width};
    }
    position: ${props=>props.position};
    top:${props=>props.top};
    left:${props=>props.left};
    bottom: ${props=>props.bottom};
    object-fit: ${props=>props.objectFit};
    aspect-ratio:${props=>props.aspectRatio}
`

export const Card = styled.div`
  width:25vw;
  min-width:240px;
  height:290px;
  max-width:240px;
  background-color:#00000063;
  display:flex;
  align-items:center;
  flex-direction:column;
  padding: 11px 0 20px 0;
  margin:30px 20px;
  // border-radius:10px;
  color:white;
  box-shadow:${props=>props.boxShadow}
`

export const H4 = styled.h4`

`

export const Text = styled.p`
  color:${props=>props.color};
  font-size: ${props=>props.fontSize};
  font-weight: ${props=>props.fontWeight};
  margin: ${props=>props.margin};
  width: ${props=>props.width};
  padding: ${props=>props.padding};
`

export const Spacer = styled.pre`
  height:${props=>props.height}
`
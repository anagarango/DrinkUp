import styled from "styled-components";

export default function Button({
  txt = "Button Text Here",
  fSize = "15px",
  color = "white",
  bgColor = "#ffffff",
  width = "150px",
  height = "40px",
  padding = "15px",
  borderRadius = "16px",
  textAlign = "center",
  margin = "15px",
  fontWeight = "600",
  onClick = ()=>{},
  border = "none",
  boxShadow = "0px 0px 3px 4px #FFFFFF, 0px 0px 11px 5px #08F7FE, 0px 0px 4px 10px rgba(0, 247, 254, 0.18), inset 0px 0px 4px 3px #FFFFFF, inset 0px 0px 11px 5px #08F7FE, inset 0px 0px 4px 10px rgba(0, 247, 254, 0.18)",
  value="",
  href,
  boxShadowHover = "0px 0px 3px 4px #FFFFFF, 0px 0px 11px 5px #085c5e, 0px 0px 4px 10px rgba(0, 247, 254, 0.08), inset 0px 0px 4px 3px #FFFFFF, inset 0px 0px 11px 5px #085c5e, inset 0px 0px 4px 10px rgba(0, 247, 254, 0.08)"
}) {

  const ButtonClick = styled.button`
    color: ${(props) => props.color};
    text-align: ${(props) => props.textAlign};
    font-weight: ${(props) => props.fontWeight};
    border: ${(props) => props.border};
    font-size: ${(props) => props.fSize};
    max-width: ${(props) => props.maxWidth};
    min-width: ${(props) => props.minWidth};
    padding: ${props=>props.padding};
    margin: ${props=>props.margin};
    background-color: ${props=>props.bgColor};
    box-shadow:${props=>props.boxShadow};
    border-radius:${props=>props.borderRadius};
    cursor:pointer;
    &:hover {
      box-shadow: ${props=>props.boxShadowHover};
    }
  `;

  return (
    <a href={href}>
        <ButtonClick
          onClick={onClick}
          fSize={fSize}
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
          boxShadow={boxShadow}
          value={value}
          boxShadowHover={boxShadowHover}
        >
          {txt}
        </ButtonClick>
    </a>
  );
}
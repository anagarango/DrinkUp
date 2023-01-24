import styled from "styled-components";

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
  margin = "10px 20px",
  fontWeight = "600",
  onClick = ()=>{},
  border = "none",
  cursor = "pointer",
  boxShadow = "0px 0px 3px 4px #FFFFFF, 0px 0px 11px 5px #08F7FE, 0px 0px 4px 10px rgba(0, 247, 254, 0.18), inset 0px 0px 4px 3px #FFFFFF, inset 0px 0px 11px 5px #08F7FE, inset 0px 0px 4px 10px rgba(0, 247, 254, 0.18)"
}) {

  // if (ifThisIsTheCategoriesButtons && !registerValue) {
  //   if (whatIsTheStateOfTheAppForCategory == value) {
  //     bgColor = "#4F4DB0";
  //     color = "white";
  //     border = "2px solid white";
  //     axios.post("/api/setSellerStatus", { value });
  //   }
  // }

  const ButtonClick = styled.button`
    color: ${(props) => props.color};
    text-align: ${(props) => props.textAlign};
    font-weight: ${(props) => props.fontWeight};
    border: ${(props) => props.border};
    font-size: ${(props) => props.fzsize};
    max-width: ${(props) => props.maxWidth};
    min-width: ${(props) => props.minWidth};
    padding: ${props=>props.padding};
    margin: ${props=>props.margin};
    background-color: ${props=>props.bgColor};
    box-shadow:${props=>props.boxShadow}
  `;

  return (
        <ButtonClick
          onClick={onClick}
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
          boxShadow={boxShadow}
        >
          {txt}
        </ButtonClick>
  );
}
import { FlexBox, Heading, Paragraph, Image } from "@/styles/global";

export default function Poster({
    bgImage,
    margin,
    overlay="rgba(255, 0, 0, 0.3)",
    name,
    caption,
    image,
    address,
    onClick=()=>{}
}){
    return(
        <FlexBox onClick={onClick} bgImage={bgImage} bgPosition="bottom" width="100%" maxWidth="350px" minHeight="550px" margin={margin} justifyContent="flex-start" overflow="hidden" transformHover="scale(1.1)" transitionHover="all 1s" cursor="pointer">
            <FlexBox width="100%" height="100%" dir="column" justifyContent="flex-start" padding="55px 15px 25px 15px">
                <Heading fontFamily="Bebas Neue">{name}</Heading>
                <Paragraph color='black' fWeight="700" padding="0px 0px 10px 0px">{caption}</Paragraph>
                <Image aspectRatio="1 / 1" src={image} objectFit="cover" width="100%" height="100%" maxHeight="320px" maxWidth="320px" minHeight="200px" minWidth="200px" />
                <Paragraph color="black" padding="10px 0px">{address}</Paragraph>
            </FlexBox>
            <FlexBox position="absolute" width="100%" maxWidth="350px" minHeight="550px" bgColor={overlay} bgColorHover="transparent" transformHover="scale(1.2)" transitionHover="all 1s" />
        </FlexBox>
    )
}
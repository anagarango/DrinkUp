import { FlexBox, Paragraph, Image } from "@/styles/global"

export default function Footer(){
    return(
        <footer style={{width:"100vw"}}>
            <FlexBox dir="column" bgColor="black" padding="30px 0px 15px 0px" width="100%">
                <Paragraph>DrinkUp© - 2023</Paragraph>
                <Image className='github' src='/GitHub.png' width={50} margin="10px 0"></Image>
            </FlexBox>
        </footer>
    )
}

// bgColor="#0A0026"
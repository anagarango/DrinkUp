import { FlexBox, Heading, Input } from "@/styles/global"


export default function NavBar(){
    return(
        <FlexBox position="fixed" top="0" width="100vw" height="70px" bgColor="black" justifyContent="space-between" padding="0px 25px">
          <Heading>DrinkUp</Heading>
          <Input value={search} onChange={event => setSearch(event.target.value)} onKeyDown={SearchCocktail}></Input>
        </FlexBox>
    )
}
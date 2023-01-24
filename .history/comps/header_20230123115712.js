import { FlexBox, Heading, Input } from "@/styles/global"
import axios from 'axios';


export default function NavBar(){

    const SearchCocktail = async (event) => {
        if(event.key == "Enter"){
          await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
          .then((results) => {
            setLoading(true);
            setCocktails("");
            setNewCocktails()
            var searchingCocktail = []
            for(var x = 0; x < results.data.drinks.length; x++){
              if(results.data.drinks[x].strCategory == "Cocktail" || results.data.drinks[x].strCategory == "Ordinary Drink" || results.data.drinks[x].strCategory == "Punch \/ Party Drink" || results.data.drinks[x].strCategory == "Shake"){
                  searchingCocktail.push(results.data.drinks[x])
                }
              }
              
            setTimeout(() => {
              
              setNewCocktails(searchingCocktail)
              setLoading(false)
            }, 1500);
            
          })
          .catch((error) => {
            console.log(error);
          })
        }
      }

    return(
        <FlexBox position="fixed" top="0" width="100vw" height="70px" bgColor="black" justifyContent="space-between" padding="0px 25px">
          <Heading>DrinkUp</Heading>
          <Input value={search} onChange={event => setSearch(event.target.value)} onKeyDown={SearchCocktail}></Input>
        </FlexBox>
    )
}
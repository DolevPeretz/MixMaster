import CocktailCard from "./CocktailCard";
import Wrapper from "../assets/wrappers/CocktailList";
function CocktailList({ drinks }) {
  if (!drinks) {
    return <h4 style={{ textAlign: "center" }}>No matching cooktails found</h4>;
  }
  const formattedDrinks = drinks.map((drink) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = drink;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });
  return (
    <Wrapper>
      {formattedDrinks.map((item) => {
        return <CocktailCard key={item.id} {...item} />;
      })}
    </Wrapper>
  );
}

export default CocktailList;

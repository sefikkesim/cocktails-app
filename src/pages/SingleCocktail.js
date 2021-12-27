import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);
  const { id } = useParams();

  const getCocktail = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      const { drinks } = data;
      console.log(drinks);
      if (drinks[0]) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: insructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newCocktail = {
          name,
          image,
          info,
          category,
          glass,
          insructions,
          ingredients,
        };
        setCocktail(newCocktail);
        setLoading(false);
      } else {
        setCocktail(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getCocktail();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if(!cocktail){
    return (
      <div className="section-title">
        <h2>There is no result to display</h2>
      </div>
    )
  }
  const { name, image, info, category, glass, insructions, ingredients } =
    cocktail;
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        {" "}
        Back to Home
      </Link>
      <h2 className="section-title">{name} </h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data"> Name : </span>
            {name}
          </p>
          <p>
            <span className="drink-data"> category : </span>
            {category}
          </p>
          <p>
            <span className="drink-data"> info : </span>
            {info}
          </p>
          <p>
            <span className="drink-data"> insructions : </span>
            {insructions}
          </p>
          <p>
            <span className="drink-data"> ingredients : </span>
            {ingredients.map((item,index)=>{
              return (
                item ? <span key={index}>{item}</span> : null
              )
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;

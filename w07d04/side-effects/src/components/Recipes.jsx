import axios from 'axios';
import {useEffect, useState} from 'react';

const Recipes = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const baseUrl = 'http://my-json-server.typicode.com/andydlindsay/chef-andy';

    const recipePromise = axios.get(`${baseUrl}/recipes`);
    const ingredientPromise = axios.get(`${baseUrl}/ingredients`);

    const promises = [recipePromise, ingredientPromise];

    Promise.all(promises)
      .then((responseArray) => {
        console.log(responseArray);

        const recipes = responseArray[0].data;
        const ingredients = responseArray[1].data

        setRecipes(recipes);
        setIngredients(ingredients);
      });
  }, []);

  const mappedRecipes = recipes.map((recipe) => {
    return <p key={recipe.id}>Recipe: {recipe.title}</p>;
  });

  return (
    <div>
      <h2>This is the Recipes component</h2>
      { mappedRecipes }
      <h2>Num ingredients: { ingredients.length }</h2>
    </div>
  );
};

export default Recipes;

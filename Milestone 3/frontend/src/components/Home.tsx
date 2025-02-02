import RecipePreview from "./RecipePreview";
import recipeData, { Recipe } from "../recipeData";
import "../App.css"
import{useState, useEffect} from "react";


function Home(){
    
    const[externalRecipes, setExternalRecipes] = useState<Recipe[]>([])
    useEffect(() => {
        fetch("https://bootcamp-milestone-4.onrender.com/recipe")
        .then((res) => res.json())
        .then((data) => setExternalRecipes(data))
    }, [])

    const [recipes, setRecipes] = useState<Recipe[]>([]);
    useEffect(() => {
        fetch('http://localhost:3001/recipe')
        .then((response) => response.json())
        .then((recipeData) => setRecipes(recipeData))
        .catch((error) => console.log(error));
    }, []);

    return(
        <main>
            <h1>This is my recipe site!</h1>

            {recipeData.map(recipe =>
            // internal recipes
            <RecipePreview name={recipe.name} image={recipe.image} desc={recipe.description} />
            )}
            {externalRecipes.map(recipe =>
            // external
            <RecipePreview name={recipe.name} image={recipe.image} desc={recipe.description} external/>    
                )}
        </main>
    )
}

export default Home;
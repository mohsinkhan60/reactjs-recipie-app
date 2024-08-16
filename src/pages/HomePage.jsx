
import { Search } from "lucide-react";
import RecipeCard from "../components/RecipeCard";
import { useEffect, useState } from "react";
import { getRandomColor } from "../lib/utils";

const APP_ID = "8b3cef90";
const APP_KEY = "a64048c9aa0cbcf67038b4afdea3b976";

export const HomePage = () => {

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async (searchQuery) => {
    setLoading(true);
    setRecipes([]);
    try{
      const res = await fetch(`https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${searchQuery}&type=public`);
      const data = await res.json();
      setRecipes(data.hits);
      // console.log(data.hits);
    }catch{
      console.log(error.message);
    }finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRecipes("chicken");
  },[]);

  const handleSearchRecipe = (e) => {
    e.preventDefault();
    fetchRecipes(e.target[0].value);
  }

  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className="h-full max-w-screen-lg mx-auto">
        <form onSubmit={handleSearchRecipe}>
          <label className="flex items-center gap-2 shadow-md input">
            <Search size="24" />
            <input
              type="text"
              className="text-sm md:text-md grow "
              placeholder="What do youu want to cook ToDay?"
            />
          </label>
        </form>

        <h1 className="mt-4 text-3xl font-bold md:text-5xl">
          Recomended Recipes
        </h1>
        <p className="my-2 ml-1 text-sm font-semibold tracking-tight text-slate-500">
          popular Choices
        </p>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">

          {!loading && (
            recipes.map(({recipe},index) => (
              <RecipeCard key={index} recipe={recipe} {...getRandomColor()} />))
          )}


          {loading && (
            [...Array(9)].map((_, index) => (
              <div key={index} className="flex flex-col gap-4 w-full">
                <div className="skeleton h-32 w-full"></div>
                <div className="flex justify-between">
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-24"></div>
                </div>
                <div className="skeleton h-4 w-1/2"></div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};
export default HomePage;

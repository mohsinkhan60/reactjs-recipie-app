
import { Search } from "lucide-react";
import RecipeCard from "../components/RecipeCard";

export const HomePage = () => {
  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className="h-full max-w-screen-lg mx-auto">
        <form>
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
          {/* First Recipes */}

          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />

          
        </div>
      </div>
    </div>
  );
};
export default HomePage;

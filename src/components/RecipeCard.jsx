import { Heart, HeartPulse, Link, Soup } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const getTwoValuesFromArray = (arr) => {
  return [arr[0], arr[1]];
};

export const RecipeCard = ({ recipe, bg, badge }) => {
  const healthLabels = getTwoValuesFromArray(recipe.healthLabels);
  const [isFavorite, setIsFavorite] = useState(localStorage.getItem("favorites")?.includes(recipe.label));

  const addRecipeToFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavorite = favorites.some((fav) => fav.label === recipe.label);
    if(isFavorite){
      favorites = favorites.filter((fav) => fav.label !== recipe.label);
      setIsFavorite(false);
      // alert("This recipe is already in your favorites");
    }else{
      favorites.push(recipe);
      setIsFavorite(true);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
  return (
    <div className={`flex-col rounded-md ${bg} p-3 relative h-fit`}>
      <a
        href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`}
        target="_blank"
        className="relative h-32"
      >
        <div className="skeleton absolute inset-0" />
        <img
          src={recipe.image}
          alt="img recipe"
          className="object-cover w-full rounded-lg cursor-pointer h-44 opacity-0 transition-opacity duration-500"
          onLoad={(e) => {
            e.currentTarget.style.opacity = 1;
            e.currentTarget.previousElementSibling.style.display = "none";
          }}
        />
        <div className="absolute flex items-center gap-1 p-1 text-sm bg-white rounded-full cursor-pointer bottom-2 left-2">
          <Soup size={16} /> {recipe.yield} Servings
        </div>
        <div className="absolute p-1 bg-white rounded-full cursor-pointer top-2 right-2" onClick={(e) => {
          e.preventDefault();
          addRecipeToFavorites();
        }}>
          {!isFavorite && <Heart size={20} className="hover:fill-red-500 hover:text-red-500" />}
          {isFavorite && <Heart size={20} className="fill-red-500 text-red-500" />}
        </div>
      </a>

      <div className="flex mt-1">
        <p className="font-bold tracking-wide">{recipe.label}</p>
      </div>
      <p className="my-2">
        {recipe.cuisineType[0].charAt(0).toUpperCase() +
          recipe.cuisineType[0].slice(1)}{" "}
        Kitchen
      </p>

      <div className="flex gap-2 mt-auto">
        {healthLabels.map((label, idx) => (
          <div
            key={idx}
            className={`flex gap-1 ${badge} items-center p-2 rounded-md`}
          >
            <HeartPulse size={16} />
            <span className="text-sm tracking-tighter font-semibold">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RecipeCard;

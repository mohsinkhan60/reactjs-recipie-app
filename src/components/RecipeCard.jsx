import { Heart, HeartPulse, Soup } from "lucide-react";
import { NavLink } from "react-router-dom";

const getTwoValuesFromArray = (arr) => {
  return [arr[0], arr[1]];
}
export const RecipeCard = ({ recipe, bg, badge }) => {
  const healthLabels = getTwoValuesFromArray(recipe.healthLabels);
  return (
    <div className={`flex-col rounded-md ${bg} p-3 relative h-fit`}>
      <NavLink to="#" className="relative h-32">
        <img
          src={recipe.image}
          alt="img recipe"
          className="object-cover w-full rounded-lg cursor-pointer h-44"
        />
        <div className="absolute flex items-center gap-1 p-1 text-sm bg-white rounded-full cursor-pointer bottom-2 left-2">
          <Soup size={16} /> {recipe.yield} Servings
        </div>
        <div className="absolute p-1 bg-white rounded-full cursor-pointer top-2 right-2">
          <Heart size={20} className="hover:fill-red-500 hover:text-red-500" />
        </div>
      </NavLink>

      <div className="flex mt-1">
        <p className="font-bold tracking-wide">{recipe.label}</p>
      </div>
      <p className="my-2">{
      recipe.cuisineType[0].charAt(0).toUpperCase() + recipe.cuisineType[0].slice(1)
        
        } Kitchen</p>

      <div className="flex gap-2 mt-auto">
        {healthLabels.map((label, idx) => (
          <div key={idx} className={`flex gap-1 ${badge} items-center p-2 rounded-md`}>
            <HeartPulse size={16} />
            <span className="text-sm tracking-tighter font-semibold">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RecipeCard;

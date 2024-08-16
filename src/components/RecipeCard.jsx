import { Heart, HeartPulse, Soup } from "lucide-react";
import { NavLink } from "react-router-dom";

export const RecipeCard = () => {
  return (
      <div className="flex-col rounded-md bg-[#ecf7d4] p-3 relative h-fit">
        <NavLink to="#" className="relative h-32">
          <img
            src="../images/1.jpg"
            alt="img recipe"
            className="object-cover w-full rounded-lg cursor-pointer h-44"
          />
          <div className="absolute flex items-center gap-1 p-1 text-sm bg-white rounded-full cursor-pointer bottom-2 left-2">
            <Soup size={16} /> 4 Servings
          </div>
          <div className="absolute p-1 bg-white rounded-full cursor-pointer top-2 right-2">
            <Heart
              size={20}
              className="hover:fill-red-500 hover:text-red-500"
            />
          </div>
        </NavLink>

        <div className="flex mt-1">
          <p className="font-bold tracking-wide">Roasted Chicken</p>
        </div>
        <p className="my-2">Turkish Kitchen</p>

        <div className="flex gap-2 mt-auto">
          <div className="flex gap-1 bg-[#d7ef80] items-center p-1 rounded-md">
            <HeartPulse size={16} />
            <span className="text-sm font-semibold tracking-tighter">
              Gulten-free
            </span>
          </div>

          <div className="flex gap-1 bg-[#d7ef80] items-center p-1 rounded-md">
            <HeartPulse size={16} />
            <span className="text-sm font-semibold tracking-tighter">
              Heart Healthy
            </span>
          </div>
        </div>
      </div>
  );
};
export default RecipeCard;

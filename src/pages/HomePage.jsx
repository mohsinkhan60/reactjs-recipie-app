import { Heart, Search, Soup } from "lucide-react";


export const HomePage = () => {
  return <div className="bg-[#faf9fb] p-10 flex-1">
    <div className="max-w-screen-lg mx-auto">
      <form>
        <label className="flex items-center gap-2 shadow-md input">
          <Search size="24" />
          <input type="text" className="text-sm md:text-md grow "
          placeholder="What do youu want to cook ToDay?" />
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

        <div className="flex-col rounded-md bg-[#ecf7d4] overflow-hidden p-3 relative">
          <a href="#" className="relative h-32">
            <img src="./images/1.jpg" alt="img recipe" className="object-cover w-full h-full rounded-lg cursor-pointer"/>
            <div className="absolute flex items-center gap-1 p-1 text-sm bg-white rounded-full cursor-pointer bottom-2 left-2">
              <Soup size={16} /> 4 Servings
            </div>
            <div className="absolute p-1 bg-white rounded-full cursor-pointer top-2 right-2">
              <Heart size={20} className="hover:fill-red-500 hover:text-red-500" />
            </div>
          </a>
          <div className="flex mt-1">
            <p>Roasted Chicken</p>
          </div>
        </div>
      </div>
    </div>
  </div>;
};
export default HomePage;

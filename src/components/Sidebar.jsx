import { Heart, Home } from "lucide-react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );
};
export default Sidebar;

const DesktopSidebar = () => {
  return (
    <div className="p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block">
      <div className="flex flex-col gap-20 sticky top-10 left-0">
        <div className="w-full">
          <img className="md:block hidden" src="./images/img1.svg" alt="logo" />
          <img className="md:hidden block" src="./images/img2.svg" alt="logo" />
        </div>

        <ul className="flex flex-col items-center md:items-start gap-8">
          <Link to="/" className="flex gap-1">
            <Home size={"24"} />
            <span className="font-bold hidden md:block">Home</span>
          </Link>

          <Link to="/favorites" className="flex gap-1">
            <Heart size={"24"} />
            <span className="font-bold hidden md:block">Favorites</span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

const MobileSidebar = () => {
  return(
    <div className="flex justify-center gap-10 border-t fixed w-full bottom-0 left-0 bg-black z-10">

    </div>
  );
}
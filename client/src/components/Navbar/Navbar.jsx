import { FaFacebook, FaStore, FaFacebookMessenger, FaBell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdOndemandVideo } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { GrHomeRounded } from "react-icons/gr";
import { CgGames } from "react-icons/cg";
import { TbGridDots } from "react-icons/tb";
import profile from '../../assets/images/profile.jpg'

const Navbar = () => {
  return (
    <div className="fixed top-0 h-[56px] z-50 w-full shadow-md bg-[#fafafa] flex justify-between px-4 md:px-6 lg:px-8">

      <div className="flex items-center gap-3">

        {/* left logos */}
        <div className="pl-2 pb-1">
          <FaFacebook className="text-3xl md:text-4xl text-blue-600" />
        </div>

        <div className=" md:flex items-center gap-2 bg-[#eceef1] p-2 rounded-full">
          <CiSearch className="text-xl md:text-2xl " />
          <input
            type="text"
            name="search"
            placeholder="Search Facebook"
            className="bg-[#eceef1] outline-none bg-transparent text-sm md:text-base font-light hidden md:flex"
          />
        </div>

      </div>

      {/* middle logo section */}

      <div className="hidden md:flex items-center justify-center flex-1 md:mx-10">
        <ul className="flex items-center justify-center gap-4 md:gap-10 lg:gap-16">
          <li className="cursor-pointer">
            <GrHomeRounded className="text-xl md:text-2xl text-gray-800" />
          </li>
          <li className="cursor-pointer">
            <MdOndemandVideo className="text-xl md:text-2xl text-gray-800" />
          </li>
          <li className="cursor-pointer">
            <FaStore className="text-xl md:text-2xl text-gray-800" />
          </li>
          <li className="cursor-pointer">
            <HiOutlineUserGroup className="text-xl md:text-2xl text-gray-800" />
          </li>
          <li className="cursor-pointer">
            <CgGames className="text-xl md:text-2xl text-gray-800" />
          </li>
        </ul>
      </div>

      {/* right logo section created */}

      <div className="flex items-center space-x-2">

        <div className="w-8 h-8 bg-fButton rounded-full flex items-center justify-center">
          <TbGridDots className="text-lg md:text-xl" />
        </div>

        <div className="w-8 h-8 bg-fButton rounded-full flex items-center justify-center">
          <FaFacebookMessenger className="text-lg md:text-xl" />
        </div>

        <div className="w-8 h-8 bg-fButton rounded-full relative flex items-center justify-center">
          <div className="absolute rounded-full bg-fRed w-4 h-4 -top-1 right-0 flex items-center justify-center">
            <span className="text-xs text-white">1</span>
          </div>
          <FaBell className="text-lg md:text-xl" />
        </div>

        <button className="h-8 w-8 flex items-center rounded-full focus:outline-none">
          <img src={profile} alt="profile picture" className="rounded-full w-full h-full border border-fButton" />
        </button>

      </div>
    </div>
  );
}

export default Navbar;

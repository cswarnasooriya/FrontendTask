import { FaDirections, FaPhoneAlt, FaStar } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";

const Intro = () => {
  return (
    <div className="shadow-md rounded w-full p-4 bg-white">
      <div className="text-xl font-bold text-fBlack">
        Intro
      </div>
      <div className="ml-2 mt-2">
        <p className="text-[15px] text-justify">
          We are a boutique digital transformation consultancy and software development company that provides
        </p>
      </div>

      <div className="mt-4 flex items-start md:items-center">
        <FaDirections className="text-2xl md:text-3xl lg:text-2xl" />
        <span className="ml-2 text-sm md:text-base lg:text-[15px]">
          No 310/1/1, Kaduwela Road, Koswatte Junction, Battaramulla, Sri Lanka
        </span>
      </div>

      <div className="mt-4 flex items-center">
        <FaPhoneAlt className="text-xl md:text-2xl" />
        <span className="ml-2 text-sm md:text-base lg:text-[15px]">
          +94 77 726 1026
        </span>
      </div>

      <div className="mt-4 flex items-center">
        <CiMail className="text-xl md:text-2xl" />
        <span className="ml-2 text-sm md:text-base lg:text-[15px]">
          hello@softmint.net
        </span>
      </div>

      <div className="mt-4 flex items-center">
        <TbWorld className="text-xl md:text-2xl" />
        <span className="ml-2 text-sm md:text-base lg:text-[15px]">
          softmint.net
        </span>
      </div>

      <div className="mt-4 flex items-center">
        <FaStar className="text-xl md:text-2xl" />
        <span className="ml-2 text-sm md:text-base lg:text-[15px]">
          Not rated yet
        </span>
      </div>
    </div>
  );
}

export default Intro;

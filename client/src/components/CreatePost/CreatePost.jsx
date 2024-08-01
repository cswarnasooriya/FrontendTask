import logo_image from '../../assets/images/profile.jpg'
import { CiImageOn } from "react-icons/ci";
import { FaRegSmile } from "react-icons/fa";
import { CiShoppingTag } from "react-icons/ci";

const CreatePost = () => {
  return (
    <div>
      <div className="w-full shadow-md rounded bg-white p-4">
        <div className="flex space-x-2">
            <img src={logo_image} alt="icon" className="h-10 w-10 rounded-full" />
            <input type="text" className="bg-fFill px-4 py-3 w-full focus:outline-none rounded-full " placeholder="Write somthing to share..."/>
        </div>
        <div className="border border-fGrey border-opacity-10 mt-4" />

        <div className="flex justify-between">
          <button className="flex justify-center items-center w-1/3 focus:outline-none mt-4 py-2">
            <CiImageOn className="text-xl"  /> <span className="text-fGrey text-opacity-80 font-medium ml-2">Photo / Video</span>
          </button>

          <button className="flex justify-center items-center w-1/3 focus:outline-none mt-4 py-2">
            <CiShoppingTag className="text-xl"  /> <span className="text-fGrey text-opacity-80 font-medium ml-2">Tag Friends</span>
          </button>

          <button className="flex justify-center items-center w-1/3 focus:outline-none mt-4 py-2">
            <FaRegSmile className="text-xl"  /> <span className="text-fGrey text-opacity-80 font-medium ml-2">Feeling/Activity</span>
          </button>

        </div>
      </div>
    </div>
  )
}

export default CreatePost

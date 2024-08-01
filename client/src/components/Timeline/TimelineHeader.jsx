import cover from '../../assets/images/timeline-main.jpg';
import profile_Img from '../../assets/images/logo.png';
import { FaWhatsapp } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { BiSolidLike } from "react-icons/bi";


const TimelineHeader = () => {
  return (
    <>
    <div className="px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-36 pt-0">
        <div className="relative rounded-b sm:flex sm:justify-center  md:justify-start ">
            <img src={cover} alt="cover image of softmint" className="object-cover w-full h-auto rounded-b" />
            <div className="absolute -bottom-32">
                <img src={profile_Img} alt="profile logo" className=" object-cover border-4 border-grey-600 w-40 h-40 rounded-full" />
            </div>
        </div>
        
        <div className="ml-[190px] md:mt-6 sm:mt-32 ">
            <h1 className='text-3xl font-bold text-fBlack'>Softmint Software Solutions</h1>
            <p className="sm:item-center">2.4 likes 2.4 followers</p>
        </div>

        <div className=" flex items-center justify-between px-4">
            <div>
                
            </div>

            <div className="flex space-x-2 sm:px-[18%] sm:pt-4 md:px-0">
                <button className=" flex itce justify-center bg-blue-500 rounded-md text-white font-bold ">
                    <div className='flex items-center justify-center px-4 py-2 gap-2'>
                        <FaWhatsapp />
                        <p className="text-sm">Whatsapp</p>
                    </div>
                </button>
                <button className=" flex itce justify-center bg-gray-200 rounded-md text-black font-bold">
                    <div className='flex items-center justify-center px-4 py-2 gap-2'>
                        <RiMessage2Fill />
                        <p className="text-sm">Message</p>
                    </div>
                </button>
                <button className=" flex itce justify-center bg-gray-200 rounded-md text-black font-bold">
                    <div className='flex items-center justify-center px-4 py-2 gap-2'>
                        <BiSolidLike />
                        <p className="text-sm">Like</p>
                    </div>
                </button>
            </div>
            
        </div>
        <div className="border-2 border-fGrey mt-6 border-opacity-10" />
    </div>

    <div>

    </div>
    </>
    

   
  )
}

export default TimelineHeader

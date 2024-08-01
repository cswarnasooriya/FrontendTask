import { BiSolidDownArrow } from "react-icons/bi";
// import { BsThreeDots } from "react-icons/bs";


const TimelineList = () => {
  return (
    <>
        <div className="flex justify-between px-4 md:px-8">
      <div className="flex flex-wrap md:flex-nowrap">

        <div className="px-4 py-3 md:px-8 md:py-5 text-fBlue border-b-4 border-fBlue font-semibold">
          Post
        </div>

        <div className="px-4 py-3 md:px-8 md:py-5 font-semibold text-gray-500">
          About
        </div>

        <div className="px-4 py-3 md:px-8 md:py-5 font-semibold text-gray-500">
          Mentions
        </div>

        <div className="px-4 py-3 md:px-8 md:py-5 font-semibold text-gray-500">
          Reviews
        </div>

        <div className="px-4 py-3 md:px-8 md:py-5 font-semibold text-gray-500">
          Followers
        </div>

        <div className="px-4 py-3 md:px-8 md:py-5 font-semibold text-gray-500">
          Photos
        </div>

        <div className="px-4 py-3 md:px-8 md:py-5 font-semibold text-gray-500 flex items-center">
          More
          <span className="ml-2"> <BiSolidDownArrow /></span>
        </div>

        {/* <div className="flex items-center">
            <button className="w-12 h-9 bg-fButton rounded flex items-center justify-center focus:outline-none">
                <BsThreeDots />
            </button>

        </div> */}
        

      </div>
     
    </div>
    <div className="border-2 border-fGrey mt-2 shadow-md border-opacity-5" />
    
    </>

    
    
  );
}

export default TimelineList;

import img from '../../assets/images/logo.png'

const Photo = () => {
  return (
    <div className="w-full shadow-md rounded p-4 bg-white">
        <div className="flex justify-between items-center">
           <div className="text-xl font-bold text-fBlack">
            Photos
           </div>

           <button className="focus:outline-none text-fBlue">
            See All Photos
           </button>
      
        </div>

        <div className="grid grid-cols-3  gap-1.5 mt-4">
            <img src={img} alt="gallery photo" />
            <img src={img} alt="gallery photo" />
            <img src={img} alt="gallery photo" />
            <img src={img} alt="gallery photo" />
            <img src={img} alt="gallery photo" />
            <img src={img} alt="gallery photo" />
            <img src={img} alt="gallery photo" />
            <img src={img} alt="gallery photo" />
            <img src={img} alt="gallery photo" />
        </div>

    </div>

        
  )
}

export default Photo

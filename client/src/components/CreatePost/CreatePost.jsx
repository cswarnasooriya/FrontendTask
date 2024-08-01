import logo_image from '../../assets/images/profile.jpg'

const CreatePost = () => {
  return (
    <div>
      <div className="w-full shadow-md rounded bg-white p-4">
        <div className="flex space-x-2">
            <img src={logo_image} alt="icon" className="h-10 w-10 rounded-full" />
            <input type="text" className="bg-fFill px-4 py-3 w-full focus:outline-none rounded-full " placeholder="Write somthing to Roland"/>
        </div>
        <div className="border border-fGrey border-opacity-10 mt-4" />
      </div>
    </div>
  )
}

export default CreatePost

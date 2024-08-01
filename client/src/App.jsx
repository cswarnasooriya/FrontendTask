
import './App.css'
import CreatePost from './components/CreatePost/CreatePost'
import Intro from './components/Intro/Intro'
import Photo from './components/Intro/Photo'
import Navbar from './components/Navbar/Navbar'
import TimelineHeader from './components/Timeline/TimelineHeader'
import TimelineList from './components/Timeline/TimelineList'

function App() {


  return (
    <>
    <div className="z-50 mb-14">
      <Navbar/>
    </div>
    <div className="z-40">
      <TimelineHeader />
      <TimelineList />
    </div>
    <div className="px-52 grid grid-cols-12 mt-4 gap-4 pb-56 bg-fFill z-10  mx-16">

      <div className="col-span-5 col-start-1">
        <Intro />
      </div>

      <div className="col-span-5 col-start-1">
        <Photo />
      </div>

      <div className="flex-row row-start-1 col-span-7 col-start-6">
        <CreatePost />
      </div>

    </div>
    </>
  )
}

export default App

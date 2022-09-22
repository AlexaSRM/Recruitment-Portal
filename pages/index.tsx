import type { NextPage } from 'next'
import Domains from '../components/Domains'
import Landing from '../components/Landing'
import Navbar from '../components/Navbar'
import Roadmap from '../components/Roadmap'

const Home: NextPage = () => {
  return (
    <div className="h-[100%] text-white">
      <Navbar/>
      <Landing/>
      <Domains/>
      <Roadmap/>
    </div>
  )
}

export default Home

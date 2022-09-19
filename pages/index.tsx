import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Domains from '../components/Domains'
import Roadmap from '../components/Roadmap'

const Home: NextPage = () => {
  return (
    <div className="bg-[#01002d] h-[100%] text-white">
      <Domains/>
      <Roadmap/>
    </div>
  )
}

export default Home

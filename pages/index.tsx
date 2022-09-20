import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Domains from '../components/Domains'

const Home: NextPage = () => {
  return (
    <div className="bg-[#01002d] h-[100%] text-white">
      <Domains/>
    </div>
  )
}

export default Home

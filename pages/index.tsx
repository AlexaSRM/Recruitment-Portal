import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Domains from '../components/Domains'

const Home: NextPage = () => {
  return (
    <div className="">
      <Domains/>
    </div>
  )
}

export default Home

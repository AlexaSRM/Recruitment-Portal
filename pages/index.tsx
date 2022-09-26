import type { NextPage } from 'next'
import Domains from '../components/Domains'
import Footer from '../components/Footer'
import Landing from '../components/Landing'
import Navbar from '../components/Navbar'
import Roadmap from '../components/Roadmap'
import Head from 'next/head';
const Home: NextPage = () => {
  return (
    <div className="h-[100%]">
      <Head>
        <link rel="shortcut icon" href="/logo.png" />
      </Head>
      <Navbar/>
      <Landing/>
      <Domains/>
      <Roadmap/>
      <Footer/>
    </div>
  )
}

export default Home

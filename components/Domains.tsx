import React from 'react'
import DomainsImage from './DomainsImage'

import frame9 from '../public/frame9.png'
import frame10 from '../public/frame10.png'
import frame11 from '../public/frame11.png'

function Domains() {
  return (
    <div className="md:w-[70vw] w-[100vw] ml-auto flex flex-col justify-center items-center">
      <div className="md:text-6xl text-4xl md:font-bold font-medium">Our <span className="text-[#28b3f2]">Domains</span></div>
      <div className="flex md:flex-row flex-col md:my-12 my-8 w-full justify-center items-center">
        <div className="md:mx-6 ml-[5rem] md:my-0 my-2 p-2 shrink"><DomainsImage image={frame9}/></div>
        <div className="md:mx-6 mx-[2.5rem] md:my-0 my-2 p-2"><DomainsImage image={frame10}/></div>
        <div className="md:mx-6 mr-[5rem] md:my-0 my-2 p-2"><DomainsImage image={frame11}/></div>
      </div>
    </div>
  )
}

export default Domains
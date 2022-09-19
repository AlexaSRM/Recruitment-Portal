import React from 'react'
import DomainsImage from './DomainsImage'

import frame9 from '../public/frame9.png'
import frame10 from '../public/frame10.png'
import frame11 from '../public/frame11.png'

function Domains() {
  return (
    <div className="border-2 border-black w-[70vw] ml-auto flex flex-col justify-center items-center">
      <div className="text-5xl bold">Our <span className="text-[#28b3f2]">Domains</span></div>
      <div className="flex">
        <DomainsImage image={frame9}/>
        <DomainsImage image={frame10}/>
        <DomainsImage image={frame11}/>
      </div>
    </div>
  )
}

export default Domains
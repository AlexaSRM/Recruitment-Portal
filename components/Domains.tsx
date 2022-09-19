import React from 'react'
import DomainsImage from './DomainsImage'

import frame9 from '../public/frame9.png'
import frame10 from '../public/frame10.png'
import frame11 from '../public/frame11.png'

function Domains() {
  return (
    <div className="border-2 border-black w-[70vw] ml-auto flex flex-col justify-center items-center">
      <div className="text-6xl bold">Our <span className="text-[#28b3f2]">Domains</span></div>
      <div className="flex my-12">
        <div className="mx-6"><DomainsImage image={frame9}/></div>
        <div className="mx-6"><DomainsImage image={frame10}/></div>
        <div className="mx-6"><DomainsImage image={frame11}/></div>

      </div>
    </div>
  )
}

export default Domains
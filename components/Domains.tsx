import React from 'react'
import DomainsImage from './DomainsImage'

function Domains() {
  return (
    <div className="border-2 border-black w-[70vw] ml-auto flex flex-col justify-center items-center">
      <div className="text-5xl bold">Our <span className="text-[#28b3f2]">Domains</span></div>
      <div className="">
        <DomainsImage/>
      </div>
    </div>
  )
}

export default Domains
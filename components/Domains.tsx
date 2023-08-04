import React from 'react'
import DomainsImage from './DomainsImage'

function Domains() {
  return (
    <div id='domains' className="md:w-[70vw] w-[100vw] ml-auto mb-16 lg:mb-56 flex flex-col justify-center items-center">
      <div className="md:text-6xl text-4xl md:font-bold font-medium">Our <span className="text-[#28b3f2]">Domains</span></div>
      <div className="flex md:flex-row flex-col md:my-12 my-8 w-full justify-center items-center">
        <div className="md:mx-6 ml-[5rem] md:my-0 my-2 p-2 shrink"><DomainsImage image={'/Frame9.png'}/></div>
        <div className="md:mx-6 mx-[2.5rem] md:my-0 my-2 p-2"><DomainsImage image={'/Frame10.png'}/></div>
        <div className="md:mx-6 mr-[5rem] md:my-0 my-2 p-2"><DomainsImage image={'/Frame11.png'}/></div>
        <div className="md:mx-6 mr-[5rem] md:my-0 my-2 p-2"><DomainsImage image={'/Frame13.png'}/></div>
      </div>
    </div>
  )
}

export default Domains
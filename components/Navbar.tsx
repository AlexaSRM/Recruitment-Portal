import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <div className='flex lg:justify-between justify-start px-4 md:px-10 lg:px-20 py-10 items-center'>
      <div>
        <picture>
          <img src="/alexa.png" alt="" />
        </picture>
      </div>
      <div className='lg:flex hidden text-2xl myFont font-semibold items-center'>
        <Link href='#domains'><div className=' mr-20 cursor-pointer'>Domains</div></Link>
        <Link href='#roadmap'><div className=' mr-20 cursor-pointer'>Roadmap</div></Link>
        <Link href='/'><div className=' cursor-pointer hover:bg-white hover:text-[#01002D] duration-150 border-white border-4 p-2 px-6 rounded-xl'>Register</div></Link>
      </div>
    </div>
  )
}

export default Navbar
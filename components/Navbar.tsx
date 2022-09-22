import React from 'react'

function Navbar() {
  return (
    <div className='flex lg:justify-between justify-start px-4 md:px-10 lg:px-20 py-10 items-center'>
      <div className=''>
        <picture>
          <img src="/alexa.png" alt="" />
        </picture>
      </div>
      <div className='lg:flex hidden text-2xl myFont font-semibold items-center'>
        <div className=' mr-20'>Domains</div>
        <div className=' mr-20'>Roadmap</div>
        <div className='border-4 p-2 px-6 rounded-xl'>Register</div>
      </div>
    </div>
  )
}

export default Navbar
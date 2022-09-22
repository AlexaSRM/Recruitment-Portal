import React from 'react'

function Landing() {
  return (
    <div className=' lg:ml-20 ml-4 lg:mt-32 lg:mb-52 mb-20'>
        <div className='md:hidden myFont border-[#29B6F6] text-[#29B6F6] border-2 w-2/3 p-4 rounded-lg'><span className='text-2xl'>Hey Alexa, are the recruitments open?</span></div>
        <div className='md:hidden w-3/3 myFont text-right ml-20 mr-5 border-2 text-xl mt-4 p-4 rounded-lg mb-20'>Yes! Fill the form and get a chance to join the voice that empowers the world!</div>
        <div className='md:text-7xl myFont md:ml-2 lg:ml-0 flex lg:text-8xl text-5xl font-bold mb-4'> <span className=' text-[#29B6F6]'>Recruitments</span> <span className='hidden md:block'>'22</span></div>
        <div className='flex myFont md:hidden justify-end mr-4 text-8xl myFont font-semibold -mt-4 mb-4'>'22</div>
        <div className='md:ml-2 myFont text-md text-left max-w-xs md:text-2xl md:max-w-xl mb-6 '>The official developers’ club of Amazon Alexa at SRMIST is now open to recruiting first and second year students! </div>
        <div className='md:ml-2 flex space-x-2 md:space-x-6'>
            <div className='border-4 myFont px-2 py-1 md:px-4 md:py-2 rounded-xl lg:rounded-lg font-bold bg-white text-[#01002D] md:text-xl'>Register Now</div>
            <div className='border-4 px-2 py-1 myFont md:px-4 md:py-2 font-semibold rounded-xl lg:rounded-lg md:text-xl' >Join Discord</div>
        </div>
    </div>
  )
}

export default Landing
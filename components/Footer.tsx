import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function Footer() {
  return (
    <div className=' flex flex-col lg:flex-row lg:justify-evenly justify-center items-center mt-20 mb-10 lg:space-x-52 flex-wrap-reverse'>
        <div className='hidden lg:flex justify-start flex-col md:ml-0 text-left'>
            <div className='fontInter md:ml-1 text-4xl'>Embrace the</div>
            <div className=' text-6xl fontInter text-[#29B6F6] font-semibold'>FUTURE.</div>
        </div>
        <div className='fontInter'>
            <div className=' text-xl mb-4'>Got any queries? Contact us at</div>
            <div>
            <div className='flex items-center justify-start lg:justify-start mb-4'>
            <div className='hidden lg:block'><Image src="/Instagram.png" alt="insta" width="26px" height="26px"></Image></div>
                <div className='lg:hidden'><Image src="/Instagram.png" alt="insta" width="26px" height="26px"></Image></div>
                <Link href="https://instagram.com/alexadevsrm?igshid=YmMyMTA2M2Y="><p className='hover:text-slate-400 cursor-pointer ml-3 lg:text-lg tracking-wider'>alexadevsrm</p></Link>
            </div>
            <div className='flex mb-6'>
                <div className='hidden lg:block'><Image src="/Mail.png" alt="insta" width="26px" height="26px"></Image></div>
                <div className='lg:hidden'><Image src="/Mail.png" alt="mail" width="26px" height="26px"></Image></div>
                <Link href="mailto:technical@alexadevsrm.com"><p className='hover:text-slate-400 cursor-pointer ml-3 lg:text-lg tracking-wider'>hello@alexadevsrm.com</p></Link>
            </div>
        </div>
        <div className='flex lg:hidden justify-start flex-col md:ml-0 text-left'>
            <div className='fontInter md:ml-1 text-4xl'>Embrace the</div>
            <div className=' text-6xl fontInter text-[#29B6F6] font-semibold'>FUTURE.</div>
        </div>
        </div>
    </div>
  )
}

export default Footer
import React from 'react'
import rectangle from '../public/rectangle.png'
import tech from '../public/tech.png'
import Image from 'next/image'

function DomainsImage() {
  return (
    <div className='relative'>
      <div className="">
        <Image
          src={rectangle}
          alt="Picture of the author"
          width="150px"
          height="200px"
        />
      </div>
      <div className="absolute left-6 top-12">
        <Image
          src={tech}
          alt="Picture of the author"
          width="100px"
          height="100px"
        />
      </div>
    </div>
  )
}

export default DomainsImage
import React from 'react'
import Image from 'next/image'

function DomainsImage(props:any) {
  return (
    <div className=''>
      <div className="">
        <Image
          src={props.image}
          alt="Picture of the author"
          width="150px"
          height="250px"
        />
      </div>
    </div>
  )
}

export default DomainsImage
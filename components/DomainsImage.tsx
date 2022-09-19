import React from 'react'
import Image from 'next/image'

function DomainsImage(props:any) {
  return (
    <div className="">
      <div className="">
        <Image
          src={props.image}
          alt="Picture of the author"
          width="200px"
          height="300px"
        />
      </div>
    </div>
  )
}

export default DomainsImage
import React from 'react'

const Heading = ({text} : { text:string }) => {
  return  <h1 className="heading w-fit font-medium p-2 mb-2 relative text-2xl">{text}</h1>
}

export default Heading
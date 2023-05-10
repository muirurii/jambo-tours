import React from 'react'

const Heading = ({text} : { text:string }) => {
  return  <h1 className="heading w-fit">{text}</h1>
}

export default Heading
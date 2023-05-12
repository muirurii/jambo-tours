import React from 'react'

const Banner = () => {
  return (
    <section className="bg-accent min-h-[30vh]
    my-8
    flex flex-col gap-5 items-center justify-center">
        <p className="text-3xl text-center font-medium font-secondary">
        Start your adventure
         and  exploration
        journey with us!
        </p>
        <button className="bg-secondary py-2 px-4 rounded-full">Get Started</button>
    </section>
  )
}

export default Banner
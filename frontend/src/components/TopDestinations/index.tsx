import React from 'react'
import Destination from '../Destination'

const TopDestinations = () => {
  return (
    <section className="relative -top-48">
        <h1 className="p-2 bg-white w-fit rounded-tr-xl">Top Destinations</h1>
        <section className="flex stair-effect justify-evenly items-start flex-wrap p-2 gap-4">
            <Destination />
            <Destination />
            <Destination />
            <Destination />
            <Destination />
        </section>
    </section>
  )
}

export default TopDestinations
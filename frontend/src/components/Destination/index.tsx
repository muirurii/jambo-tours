import {BiMap} from "react-icons/bi"
import { DestinationTypes } from "../../Types"

const Destination = ({destination}: {destination: DestinationTypes}) => {
  return (
    <section className="w-64 h-80 rounded-lg overflow-hidden relative
    group transition-colors duration-300 delay-300 hover:border-t-4 hover:border-accent
    ">
        <img
        className="w-full h-full object-cover"
        src={destination.image}
        alt="Destination" />

        <article className="absolute bottom-0 pl-2 pb-8 cursor-pointer transition-all duration-300 group-hover:h-full
        w-full h-48 z-20 rounded-bl-sm flex flex-col justify-end group-hover:justify-center
        bg-gradient-to-t from-secondary to-[#06060670]">
          <h3 className ="font-secondary text-accent">{destination.destination}</h3>
          <div className="flex items-center justify-start gap-x-2 mb-2">
            <BiMap />
            <p>{destination.location}</p>
          </div>
          <p className="text-xs">{destination.description}</p>
        </article>


    </section>
  )
}

export default Destination
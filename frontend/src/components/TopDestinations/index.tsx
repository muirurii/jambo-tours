import React from "react";
import Destination from "../Destination";
import { DestinationTypes } from "../../Types";
import Heading from "../Heading";

const destinations: DestinationTypes[] = [
  {
    destination: "Maasai Mara National Reserve",
    location: "South Western Kenya",
    image:"https://images.pexels.com/photos/5989882/pexels-photo-5989882.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Maasai Mara is famous for its abundant wildlife, including the annual wildebeest migration.",
  },
  {
    destination: "Mount Kenya",
    location: "Central Kenya",
    image: "https://images.pexels.com/photos/4390119/pexels-photo-4390119.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Mount Kenya is the highest mountain in the country and offers breathtaking views, hiking trails, and opportunities for mountain climbing.",
  },
  {
    destination: "Lamu Island",
    location: "Lamu",
    image:"https://images.pexels.com/photos/15241813/pexels-photo-15241813.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Lamu Island is a UNESCO World Heritage site known for its rich history, traditional architecture, and stunning beaches.",
  },
  {
    destination: "Lake Nakuru National Park",
    location: "Nakuru",
    image: "https://images.pexels.com/photos/1181181/pexels-photo-1181181.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Lake Nakuru National Park is home to a diverse array of wildlife, including flamingos, lions, and rhinos.",
  },
];

const TopDestinations = () => {
  return (
    <section className="relative -top-36">
      <Heading text="Top Destinations" />
      <section className="flex stair-effect justify-evenly items-start flex-wrap p-2 gap-4">
        {
          destinations.map(destination => <Destination destination={destination} key={destination.description} />)
        }
      </section>
    </section>
  );
};

export default TopDestinations;

import React, { useEffect, useRef, useState } from "react";
import Heading from "../Heading";
import { TestimonialTypes } from "../../Types";
import Testimonial from "../Testimonial";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarouselIndicator from "../CarouselIndicator";

const testimonials: TestimonialTypes[] = [
  {
    name: "Sarah Johnson",
    occupation: "Marketing Manager",
    rating: 5,
    message: `Jambo Tours provided an incredible experience for our team-building trip to Kenya.
    From the moment we arrived, their team was attentive, professional, and knowledgeable.
    Our safari in the Maasai Mara was unforgettable, and the accommodations were top-notch.
    I would highly recommend Jambo Tours to anyone looking for a truly amazing adventure.`,
  },
  {
    name: "Michael Williams",
    occupation: "Business Owner",
    rating: 4.5,
    message: `My family and I had a fantastic time exploring Kenya with Jambo Tours.
              Our guide was friendly and informative, and we saw so much wildlife on our safari in
              Lake Nakuru National Park. The only reason I'm giving them 4.5 stars instead of 5 is that
              we had some minor issues with our accommodations. However, the team at Jambo Tours was quick
              to address our concerns and make things right. Overall, I would definitely recommend them.`,
  },
  {
    name: "John Doe",
    occupation: "Retired Teacher",
    rating: 5,
    message: `I had the time of my life on the Mount Kenya climb with Jambo Tours.
              Our guide was patient and encouraging, and the views from the summit were absolutely breathtaking.
              I would highly recommend this experience to anyone who loves adventure and the great outdoors.`,
  },
  {
    name: "Rachel Lee",
    occupation: "Nurse",
    rating: 4,
    message: `Lamu Island was a dream come true, thanks to Jambo Tours.
              The beaches were stunning, and the cultural experiences were fascinating.
              The only downside was that our accommodations were a bit basic, but the friendly staff
              more than made up for it. I would definitely recommend this trip to anyone looking for
              a laid-back beach vacation with a touch of adventure.`,
  },
  {
    name: "Ahmed Hassan",
    occupation: "Engineer",
    rating: 5,
    message: `Jambo Tours was fantastic from start to finish.
              Our safari in the Maasai Mara was an experience of a lifetime,
              and our guide was incredibly knowledgeable and friendly.
              The accommodations were also top-notch, with all the amenities we could ask for.
              I would definitely recommend Jambo Tours to anyone looking for a world-class travel experience.`,
  },
  {
    name: "Maria Rodriguez",
    occupation: "Student",
    rating: 4.5,
    message: `I had a great time on the Hell's Gate biking and hiking tour with Jambo Tours.
              The scenery was beautiful, and our guide was fun and engaging.
              The only issue we had was that the tour was a bit rushed, and we didn't have as much
              time to explore as we would have liked.
              However, overall it was a great experience and I would recommend it to anyone
              looking for an active adventure.`,
  },
];


const Testimonials = () => {

  return (
    <section>
      <Heading text="What our Customers Say" />
      <Carousel
        className="py-8"
        autoPlay={true}
        emulateTouch={true}
        infiniteLoop={true}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        renderIndicator={(
          clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
          isSelected: boolean,
          index: number,
          label: string
        ) => (
          <CarouselIndicator
            isSelected={isSelected}
            clickHandler={clickHandler}
          />
        )}
        renderItem={(
          item: React.ReactNode,
          options?: { isSelected: boolean }
        ) => (
          <div className={` ${!options?.isSelected ? "opacity-0 transition-opacity duration-300 h-96" : null}`}>
            {item}
          </div>
        )}
      >
        {testimonials.map((testimonial) => (
          <Testimonial testimonial={testimonial} key={testimonial.message} />
        ))}
      </Carousel>
    </section>
  );
};

export default Testimonials;

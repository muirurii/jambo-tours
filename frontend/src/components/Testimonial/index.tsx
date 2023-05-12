import React from "react";
import { TestimonialTypes } from "../../Types";
import RateCard from "../RateCard";

const Testimonial = ({ testimonial }: { testimonial: TestimonialTypes }) => {
  return (
    <section className="w-screen flex justify-center py-8">
      <section className="h w-full max-w-md border border-secondary rounded-sm p-4 mb-8 flex flex-col items-center gap-y-2">
        <div className="w-12 h-12">
        <img
          className="w-4 h-12 rounded-full"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Profile"
        /></div>
        <article>
          <p className="text-xs italic font-secondary py-2">{testimonial.message}</p>
          <label className="text-accent block mb-1">~{testimonial.name}</label>
          <label className="text-xs">{testimonial.occupation}</label>
          <RateCard rating={testimonial.rating} />
        </article>
      </section>
    </section>
  );
};

export default Testimonial;

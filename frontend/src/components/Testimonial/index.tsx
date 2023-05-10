import React from 'react'
import { TestimonialTypes } from '../../Types'

const Testimonial = ({testimonial}:{testimonial: TestimonialTypes}) => {
  return (
    <section className="h w-80 border border-secondary p-2">
        <img className="w-24 h-24 rounded-full" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Profile"
        />
        <article>
            <p className="text-sm">
                {
                    testimonial.message
                }
            </p>
            <label htmlFor="">{testimonial.name}</label>
        </article>
    </section>
  )
}

export default Testimonial
import React from 'react'
import Heading from '../Heading'

const WelcomeSection = () => {
  return (
    <section>
        <Heading text="Welcome To Jambo Tours" />
        <section className="flex items-center justify-evenly">
            <article>
                <p className="max-w-md">
            Welcome to Jambo Tours, your trusted guide to the best adventures and experiences in Kenya.
            With our passion for travel and commitment to excellence, we're here to help you create unforgettable
            memories and explore the beauty and wonder of this incredible country.
            We offer a wide range of tours and travel packages to suit every interest and budget.
            Our team of experienced guides and travel experts is dedicated to providing personalized
            service and expert guidance, ensuring that you get the most out of your time in Kenya.
            So come join us on an adventure and discover the magic of Kenya with Jambo Tours!
            </p>
            <button className="p-3 bg-secondary text-white rounded inline-block mt-4 font-medium">Start exploring</button>
            </article>
            <img className="h-[400px] w-96" alt="AGENCY" src="https://images.pexels.com/photos/7235813/pexels-photo-7235813.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </section>
    </section>
  )
}

export default WelcomeSection
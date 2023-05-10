import Hero from "../../Hero"
import Testimonials from "../../Testimonials"
import TopDestinations from "../../TopDestinations"
import WelcomeSection from "../../Welcome"

const HomePage = () => {
  return (
    <main>
        <Hero />
        <TopDestinations />
        <WelcomeSection />
        <Testimonials />
    </main>
  )
}

export default HomePage
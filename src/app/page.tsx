import BookACall from './components/BookACall'
import Details from './components/Details'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks/HowItWorks'
import ImproveYourStuff from './components/ImproveYourStuff'
import Navbar from './components/Navbar'
import Testimonials from './components/Testimonials'

export default function Home() {
  return (
   <main>
    <Navbar />
    <Hero />
    <HowItWorks />
    <ImproveYourStuff />
    <Testimonials />
    <BookACall />
   </main>
  )
}

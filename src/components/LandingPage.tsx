import HeroSection from './sections/HeroSection'
import FeaturedProjects from './sections/FeaturedProjects'
import InvestmentSimulator from './sections/InvestmentSimulator'
import HowItWorks from './sections/HowItWorks'
import Statistics from './sections/Statistics'
import Footer from './sections/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedProjects />
      <InvestmentSimulator />
      <HowItWorks />
      <Statistics />
      <Footer />
    </div>
  )
}
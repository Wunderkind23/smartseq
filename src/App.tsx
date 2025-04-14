import Heropage from './pages/Heropage'
import Footer from './pages/Footer'
import Latestarticle from './components/Latestarticle'
import TestimonialSlider from './components/TestimonialSlide'
import CounterSection from './components/CountSection'
import BusinessIntro from './components/BusinessIntro'

// type Props = {}

const App = () => {
  return (
    <div>
      <Heropage/>
      <BusinessIntro/>
      <CounterSection/>
      <TestimonialSlider/>
      <Latestarticle/>
      <Footer/>
    </div>
  )
}

export default App
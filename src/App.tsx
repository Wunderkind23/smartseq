import Heropage from './pages/Heropage'
import Footer from './pages/Footer'
import Latestarticle from './components/Latestarticle'
import TestimonialSlider from './components/TestimonialSlide'

// type Props = {}

const App = () => {
  return (
    <div>
      <Heropage/>
      <TestimonialSlider/>
      <Latestarticle/>
      <Footer/>
    </div>
  )
}

export default App
import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import BgSlider from '../components/BgSlider'
import Testimonials from '../components/Testimonials'
import Uplaod from '../components/Uplaod'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Steps/>
      <BgSlider />
      <Testimonials />
      <Uplaod />
      <Footer />
    </div>
  )
}

export default Home

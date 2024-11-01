import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Events from './Components/Events/Events'
import Testimonials from './Components/Testimonials/Testimonials'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <div className="container">
         <Title subTitle='Our Program' title='What we Offer'/> 
         <Programs/>
         <About/>
         <Title subTitle='Gallery' title='Events that we made Perfect'/> 
         <Events/>
         <Title subTitle='Testimonial' title="Smooth Events, Happy Clients!" />
         <Testimonials/>
      </div>  
    </div>
  )
}

export default App
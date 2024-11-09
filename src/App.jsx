import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import About from './Components/About/About';
import Events from './Components/Events/Events';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Footer/Footer';
import Title from './Components/Title/Title';
import LoginForm from './Components/LoginForm/LoginForm'


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      
      <div className="container">
        <Title subTitle="Our Program" title="What we Offer" />
        <Programs />
        <About />
        <Title subTitle="Gallery" title="Events that we made Perfect" />
        <Events />
        <Title subTitle="Testimonial" title="Smooth Events, Happy Clients!" />
        <Testimonials />
        <Title subTitle="Contact" title="Get in touch!" />
        <Contact />
        <LoginForm/>
      </div>
      
      <Footer />
    </Router>
  );
};

export default App;

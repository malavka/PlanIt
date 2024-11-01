import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
      </div>
      <div className="about-right">
        <h3>About PlanIt</h3>
        <h2>PLANNING MADE EASY!</h2>
        <p>Welcome to PlanIt, where "Planning made easy" is more than just our slogan—it's the foundation of our mission. 
           At PlanIt, we believe that every event, big or small, is an opportunity to create lasting memories. 
           Our team of experienced event planners is committed to taking the stress out of organizing and delivering exceptional 
           experiences that exceed your expectations. From weddings and private gatherings to corporate events and large-scale celebrations, 
           we bring creativity, precision, and passion to every detail, ensuring a seamless journey from concept to execution.</p>
        <p>With years of experience in the industry, PlanIt has cultivated a network of trusted vendors, premium venues, and skilled professionals, 
           enabling us to provide you with top-tier services tailored to your unique style, needs, and budget. We approach each event with fresh 
           ideas and a personalized strategy, blending innovative designs with meticulous coordination so that you can focus on what truly matters—enjoying 
           the moment with those who matter most.</p>
        <p>Whether you’re envisioning an elegant wedding, an inspiring conference, or a vibrant social gathering, PlanIt is here to bring your vision to life. 
           Our goal is simple: to take the complexity out of planning, creating memorable, one-of-a-kind events that reflect your personality and purpose. 
           So why wait? Let’s make it happen together. Plan it with PlanIt!</p>
      </div>
    </div>
  )
}

export default About

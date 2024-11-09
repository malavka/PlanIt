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
        <p>Welcome to PlanIt, where *“Planning made easy”* is more than just a tagline—it’s the foundation of our mission. 
          We believe that every event, no matter the size, is an opportunity to create lasting memories. Our team of experienced 
          event planners is dedicated to taking the stress out of organizing, delivering exceptional experiences that go above and 
          beyond expectations. From intimate gatherings to grand celebrations, we bring creativity, precision, and passion to every detail, 
          ensuring a smooth journey from concept to execution.</p>

        <p>With years of experience in the industry, PlanIt has developed a trusted network of top-tier vendors, 
           premium venues, and skilled professionals. This extensive network enables us to provide services tailored 
           to your unique style, needs, and budget, ensuring every aspect of your event is covered with quality and expertise. 
           Our approach to each event begins with fresh ideas and a personalized strategy, blending innovative designs with 
           meticulous coordination, so you can focus on what truly matters—enjoying the moment with those who matter most.</p>
        
        <p>PlanIt is an innovative event management web app designed to streamline the entire process of planning and organizing events. 
           From conferences and weddings to corporate gatherings and parties, PlanIt provides an all-in-one platform to manage every detail. 
           With features like customizable event timelines, guest list management, and budget tracking, users can easily stay on top of their 
           planning tasks. The app’s collaboration tools also allow teams to work together seamlessly, sharing updates in real time and making 
           adjustments on the go. Whether you're hosting a small meeting or a large-scale event, PlanIt ensures that everything runs smoothly 
           and on schedule."</p>

        <p>Whether you’re envisioning an elegant wedding, an inspiring corporate conference, or a vibrant social gathering, 
          PlanIt is here to bring your vision to life. Our goal is to take the complexity out of planning, allowing you to fully 
          immerse yourself in the experience while we handle the details. Let’s make it happen together. Plan it with PlanIt!</p>
      </div>
    </div>
  )
}

export default About

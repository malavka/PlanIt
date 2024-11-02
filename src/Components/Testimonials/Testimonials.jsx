import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next_icon.jpeg'
import back_icon from '../../assets/back_icon.jpeg'
import user_1 from '../../assets/user-1.jpeg'
import user_2 from '../../assets/user-2.jpeg'
import user_3 from '../../assets/user-3.webp'
import user_4 from '../../assets/user-4.webp'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx-=25;
        
    }
}
const slideBackward = ()=>{
    
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick=
      {slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick=
      {slideBackward}/>
      <div className="slider">
     
      <ul ref={slider}>
      <div className="slide">
        <li>
            
                <div className="user-info">
                    <img src={user_1} alt='' />
                    <div>
                        <h3>William Jackson</h3>
                        <span>Australia</span>
                    </div>
                </div>
                <p>I couldn't have asked for a better experience than what PlanIt provided for our wedding!
                     From start to finish, they handled every detail with incredible professionalism, creativity, and care. 
                     Planning a wedding can be overwhelming, but their team made the process seamless and stress-free. 
                     They took our vision and turned it into a reality far beyond what we had imagined.</p>

                <p>Thank you, PlanIt, for making our wedding day unforgettable. 
                   We are beyond grateful for your dedication, expertise, and the heart you put into your work. 
                   We highly recommend them to anyone looking to bring their dream wedding to life!</p>
            
        </li>
        <li>
            
                <div className="user-info">
                    <img src={user_2} alt='' />
                    <div>
                        <h3>Anna Mathew</h3>
                        <span>Scotland</span>
                    </div>
                </div>
                <p>We hired PlanIt to plan our annual corporate retreat, and we couldn’t be happier with the outcome! 
                   Their team handled every detail, from logistics to event branding, with absolute precision. 
                   They brought creativity and professionalism that not only elevated the entire experience but also 
                   reflected our company’s vision beautifully. We truly appreciated their willingness to customize everything 
                   according to our needs and the ease with which they managed last-minute changes.</p>

                <p>Our employees are still raving about the event! The schedule was seamless, the team-building activities were engaging, 
                   and the atmosphere fostered both camaraderie and relaxation. Working with PlanIt was a pleasure, 
                   and we will absolutely be reaching out to them for future events. They transformed our vision into an experience our team 
                   will remember for years!"</p>
            
        </li>
        <li>
            
                <div className="user-info">
                    <img src={user_3} alt='' />
                    <div>
                        <h3>John Doe Zacharia</h3>
                        <span>Morocco</span>
                    </div>
                </div>
                <p>I hired PlanIt to organize a surprise 50th birthday party for my wife, and I am beyond thrilled with the results! 
                   They transformed our space into an elegant and fun atmosphere, paying attention to every little detail that made the 
                   night unforgettable. From the gorgeous decor to the entertainment, everything was perfect and reflected the warm, 
                   personal touch they promised. The team even coordinated a surprise slideshow and ensured all guests felt comfortable 
                   and entertained throughout the evening.</p>

                <p>My wife was completely surprised and touched, and our guests couldn’t stop commenting on how beautiful and well-planned 
                   the night was. The team was incredibly friendly, responsive, and went above and beyond to bring my vision to life. I would 
                   wholeheartedly recommend PlanIt for anyone planning a special occasion—they truly know how to make memories that last!</p>
            
        </li>
        <li>
            
                <div className="user-info">
                    <img src={user_4} alt='' />
                    <div>
                        <h3>Sarah Mary John</h3>
                        <span>Brazil</span>
                    </div>
                </div>
                <p>Working with PlanIt to organize our annual charity gala was a fantastic experience. We had a specific vision for the evening, 
                   and the team executed it flawlessly. They took care of everything, from venue selection to intricate decor and seamless 
                   coordination with our sponsors and volunteers. Their experience with charity events really shone through, as they managed to 
                   create an elegant and impactful atmosphere that highlighted our cause and encouraged generous participation.</p>

                <p>The feedback from our guests was overwhelmingly positive! The event was beautifully organized, from the inspiring keynote 
                   speaker lineup to the smoothly-run auction. Their attention to detail and commitment to making our vision a reality made a 
                   huge difference. Thanks to PlanIt, we had a successful night that exceeded our fundraising goals and left a lasting impression 
                   on our community.</p>
            
        </li>
        </div>
      </ul>
      </div>
    </div>
  )
}

export default Testimonials

import React from 'react'
import './Events.css'
import gallery_1 from '../../assets/gallery-1.jpg'
import gallery_2 from '../../assets/gallery-2.jpeg'
import gallery_3 from '../../assets/gallery-3.jpg'
import gallery_4 from '../../assets/gallery-4.jpeg'

const Events = () => {
  return (
    <div className='events'>
      <div className="gallery">
        <img src={gallery_1} alt=""/>
        <img src={gallery_2} alt=""/>
        <img src={gallery_3} alt=""/>
        <img src={gallery_4} alt=""/>
        </div>
        <button className='btn dark-btn'>See More</button>
    </div>
  )
}

export default Events

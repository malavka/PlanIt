
// src/components/Events.js
import React, { useEffect, useRef } from 'react';
import './Events.css';
import gallery_1 from '../../assets/gallery-1.jpg';
import gallery_2 from '../../assets/gallery-2.jpeg';
import gallery_3 from '../../assets/gallery-3.jpeg';
import gallery_4 from '../../assets/gallery-4.jpeg';
import gallery_5 from '../../assets/gallery-5.jpeg';
import gallery_6 from '../../assets/gallery-6.jpeg';
import gallery_7 from '../../assets/gallery-7.webp';
import gallery_8 from '../../assets/gallery-8.jpeg';
import gallery_9 from '../../assets/gallery-9.webp';
import gallery_10 from '../../assets/gallery-10.jpeg';
import gallery_11 from '../../assets/gallery-11.jpeg';
import gallery_12 from '../../assets/gallery-12.jpeg';
import gallery_13 from '../../assets/gallery-13.jpeg';
import gallery_14 from '../../assets/gallery-14.webp';
import gallery_15 from '../../assets/gallery-15.webp';

const images = [gallery_1, gallery_2, gallery_3, gallery_4, gallery_5, gallery_6, gallery_7, gallery_8, gallery_9, gallery_10, gallery_11, gallery_12, gallery_13, gallery_14, gallery_15];

const Events = () => {
    const galleryRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (galleryRef.current) {
                galleryRef.current.scrollBy({
                    left: galleryRef.current.offsetWidth,
                    behavior: 'smooth',
                });
                
                // If scrolled to the end, reset to the beginning
                if (galleryRef.current.scrollLeft >= galleryRef.current.scrollWidth - galleryRef.current.offsetWidth) {
                    galleryRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }
            }
        }, 4000); // Slide every 4 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    return (
        <div className='events'>
            <div className="gallery" ref={galleryRef}>
                {images.map((image, index) => (
                    <div className="gallery-card" key={index}>
                        <img src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
                    </div>
                ))}
            </div>
            <button className='btn dark-btn'>See More</button>
        </div>
    );
};

export default Events;

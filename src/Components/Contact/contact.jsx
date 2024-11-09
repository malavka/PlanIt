import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <div className="form-container">
        <form>
          <label>Full Name</label>
          <input type="text" placeholder="Full Name" />
          
          <label>Email Address</label>
          <input type="email" placeholder="Email Address" />
          
          <label>Phone No</label>
          <input type="tel" placeholder="Phone No" />
          
          <label>Event Type*</label>
          <select>
            <option>Wedding</option>
            <option>Birthday Party</option>
            <option>Baptism</option>
            <option>Baby Shower</option>
            <option>Gender Reveal</option>
            <option>Corporate Event</option>
            <option>Seminars $ Conferences</option>
          </select>
          
          <label>Event Date*</label>
          <input type="date" />
          
          <label>Event Venue*</label>
          <input type="text" placeholder="Event Venue" />
          
          <label>How did you hear about us?*</label>
          <select>
            <option>Instagram</option>
            <option>Facebook</option>
            <option>Threads</option>
            <option>Google</option>
          </select>
          
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="contact-details">
        <h2>Contact Details</h2>
        <p>Feel free to reach out through the contact form or find our contact information below. </p>
          <p> Your feedback, questions and suggestions are important to us as we strive to provide 
           exceptional service to our cusomers. We will be glad to become a part of your unique event</p>
        
        <div className="contact-info">
          <div className="contact-item">
            <span>📧</span> info@planitservices.in
          </div>
          <div className="contact-item">
            <span>📞</span> +91 9778701470, +91 9188435489
          </div>
          <div className="contact-item">
            <span>📍</span> DLF PHASE - 2 L-25/9, Near by Private Hospital, Gurugram, Haryana
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Contact;

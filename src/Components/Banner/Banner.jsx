// Banner.jsx
import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div className="banner-container">
      <div className="circle">
        <div className="circle-text">
          <h2>V3 Events & Weddings</h2>
          <p>International Wedding Planner</p>
          <p>Thailand | Dubai | Malaysia | Bali | Turkey | Kathmandu | Baku</p>
        </div>

        <div className="icons-container">
          <div className="icon-item" style={{ transform: "rotate(0deg) translate(130px) rotate(0deg)" }}>
            <img src="/bigben.png" alt="Big Ben" />
          </div>
          <div className="icon-item" style={{ transform: "rotate(30deg) translate(130px) rotate(-30deg)" }}>
            <img src="/eiffeltower.png" alt="Eiffel Tower" />
          </div>
          <div className="icon-item" style={{ transform: "rotate(60deg) translate(130px) rotate(-60deg)" }}>
            <img src="/statue.png" alt="Statue of Liberty" />
          </div>
          <div className="icon-item" style={{ transform: "rotate(90deg) translate(130px) rotate(-90deg)" }}>
            <img src="/colosseum.png" alt="Colosseum" />
          </div>
          <div className="icon-item" style={{ transform: "rotate(120deg) translate(130px) rotate(-120deg)" }}>
            <img src="/tajmahal.png" alt="Taj Mahal" />
          </div>
          <div className="icon-item" style={{ transform: "rotate(150deg) translate(130px) rotate(-150deg)" }}>
            <img src="/opera.png" alt="Sydney Opera House" />
          </div>
          <div className="icon-item" style={{ transform: "rotate(180deg) translate(130px) rotate(-180deg)" }}>
            <img src="/christ.png" alt="Christ the Redeemer" />
          </div>
          <div className="icon-item" style={{ transform: "rotate(210deg) translate(130px) rotate(-210deg)" }}>
            <img src="/burjkhalifa.png" alt="Burj Khalifa" />
          </div>
          <div className="icon-item" style={{ transform: "rotate(240deg) translate(130px) rotate(-240deg)" }}>
            <img src="/paris.png" alt="Paris" />
          </div>
          <div className="icon-item" style={{ transform: "rotate(270deg) translate(130px) rotate(-270deg)" }}>
            <img src="/fuji.png" alt="Mount Fuji" />
          </div>
          <div className="icon-item" style={{ transform: "rotate(300deg) translate(130px) rotate(-300deg)" }}>
            <img src="/pisa.png" alt="Leaning Tower of Pisa" />
          </div>
          <div className="icon-item" style={{ transform: "rotate(330deg) translate(130px) rotate(-330deg)" }}>
            <img src="/pagoda.png" alt="Pagoda" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

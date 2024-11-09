import React from 'react';
import './Programs.css';
import program_1 from '../../assets/programs-1.jpg';
import program_2 from '../../assets/programs-2.jpg';
import program_3 from '../../assets/programs-3.jpeg';
import program_4 from '../../assets/programs-4.webp';
import program_5 from '../../assets/programs-5.jpeg';
import program_6 from '../../assets/programs-6.jpeg';
import program_7 from '../../assets/programs-7.jpeg';
import program_8 from '../../assets/programs-8.jpg';
import program_9 from '../../assets/programs-9.jpeg';
import program_10 from '../../assets/programs-10.webp';
import program_11 from '../../assets/programs-11.jpeg';
import program_12 from '../../assets/programs-12.jpeg';
import program_icon_3 from '../../assets/program_icon_3.jpg';

const Programs = () => {
    return (
        <div className='programs'>
            <div className='program-row'>
                <div className='program'>
                    <img src={program_1} alt='' />
                    <div className="caption">
                        <img src={program_icon_3} alt='' />
                        <p>Wedding</p>
                    </div>
                </div>
                <div className="program">
                    <img src={program_2} alt="" />
                    <div className="caption">
                        <img src={program_icon_3} alt='' />
                        <p>Birthday</p>
                    </div>
                </div>
                <div className="program">
                    <img src={program_3} alt="" />
                    <div className="caption">
                        <img src={program_icon_3} alt='' />
                        <p>Gender Reveal</p>
                    </div>
                </div>
                <div className="program">
                    <img src={program_4} alt="" />
                    <div className="caption">
                        <img src={program_icon_3} alt='' />
                        <p>Bridal Shower</p>
                    </div>
                </div>
            </div>
            <div className='program-row'>
                <div className="program">
                    <img src={program_5} alt="" />
                    <div className="caption">
                        <img src={program_icon_3} alt='' />
                        <p>Baptism</p>
                    </div>
                </div>
                <div className="program">
                    <img src={program_6} alt="" />
                    <div className="caption">
                        <img src={program_icon_3} alt='' />
                        <p>Bachelorette</p>
                    </div>
                </div>
                <div className="program">
                    <img src={program_7} alt="" />
                    <div className="caption">
                        <img src={program_icon_3} alt='' />
                        <p>Anniversary</p>
                    </div>
                </div>
                <div className="program">
                    <img src={program_8} alt="" />
                    <div className="caption">
                        <img src={program_icon_3} alt='' />
                        <p>Corporate Meetings</p>
                    </div>
                </div>
            </div>
            <div className='program-row'>
                <div className="program">
                    <img src={program_9} alt="" />
                    <div className="caption">
                        <img src={program_icon_3} alt='' />
                        <p>Naming Ceremony</p>
                    </div>
                </div>
                <div className="program">
                    <img src={program_10} alt="" />
                    <div className="caption">
                        <img src={program_icon_3} alt='' />
                        <p>Pet Parties</p>
                    </div>
                </div>
                <div className="program">
                    <img src={program_11} alt="" />
                    <div className="caption">
                        <img src={program_icon_3} alt='' />
                        <p>College Events</p>
                    </div>
                </div>
                <div className="program">
                    <img src={program_12} alt="" />
                    <div className="caption">
                        <img src={program_icon_3} alt='' />
                        <p>Concerts</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Programs;

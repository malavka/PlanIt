import React from 'react'
import './Programs.css'
import program_1 from '../../assets/programs-1.jpg'
import program_2 from '../../assets/programs-2.jpg'
import program_3 from '../../assets/programs-3.jpg'
import program_icon_1 from '../../assets/program_icon_1.jpg'
import program_icon_2 from '../../assets/program_icon_2.jpg'
import program_icon_3 from '../../assets/program_icon_3.jpg'

const Programs = () => {
    return (
        <div className='programs'>
            <div className='program'>
                <img src={program_1} alt='' />
        <div className="caption">
            <img src={program_icon_1} alt='' />
            <p>Wedding</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
            <img src={program_icon_2} alt='' />
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
</div>
)
}

export default Programs

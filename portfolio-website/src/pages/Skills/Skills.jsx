import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters'

import './Skills.scss'

const Skills = () => {
  const skillsTitle = ['M', 'y', ' ', 'S', 'k', 'i', 'l', 'l', 's']

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="container skills-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={skillsTitle}
            idx={15}
          />
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          voluptatibus eaque aliquam at quam quae reiciendis minima tenetur aut
          dolor in commodi, officia quo quisquam vero ab soluta minus molestias.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, dicta
          quasi explicabo recusandae cupiditate autem nobis officia ab rerum
          blanditiis.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, fugit.
        </p>
      </div>
    </div>
  )
}

export default Skills

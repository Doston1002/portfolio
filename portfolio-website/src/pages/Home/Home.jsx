import React, { useEffect, useState } from 'react'

import './Home.scss'

import LogoTitle from '../../assets/images/oxirgisi-b.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters'
import Logo from '../../components/Logo/Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['D','o', 's', 't', 'o', 'n']
  const jobArray = [
    'F',
    'r',
    'o',
    'n',
    't',
    'e',
    'n',
    'd',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={`${letterClass}`}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`} >'m </span>
          {/* <img src={LogoTitle} alt="developer" /> */}
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
        <a
          className="flat-button"
          href="Bekzod`s Resume.pdf"
          download="Bekzod`s Resume.pdf"
        >
          DOWNLOAD CV
        </a>
      </div>
      <Logo />
    </div>
  )
}

export default Home

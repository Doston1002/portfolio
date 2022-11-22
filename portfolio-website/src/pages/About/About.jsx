import React, { useEffect, useState } from 'react'

import './About.scss'

import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { Col, Container, Row } from 'reactstrap'

const About = () => {
  const aboutTitle = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <Container>
      <Row>
        <Col>
          <div className="container about-page">
            <div className="text-zone">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={aboutTitle}
                  idx={15}
                />
              </h1>

              <div className="text-title">
                <i class="fa-solid fa-angle-right"></i>
                <FontAwesomeIcon icon="fa-regular fa-chevron-right" />
                <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                <p>Po'latov Doston</p>
                <p>
                  <span>Birthday:</span> 2 October 1999
                </p>
                <p>
                  <span> Phone:</span>{' '}
                  <a href="tel:+998 99 668-40-68">+99899 668-40-68</a>
                </p>
                <p>
                  <span>Age:</span> 23
                </p>
                <p>
                  <span>Birthday:</span> 2 October 1999
                </p>
                <p>
                  <span>Email:</span>{' '}
                  <a href="mailto:polatovdoston1002@gmail.com">
                    polatovdoston1002@gmail.com
                  </a>
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  dicta quasi explicabo recusandae cupiditate autem nobis
                  officia ab rerum blanditiis.
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                  fugit.
                </p>
              </div>
            </div>

            <div className="stage-cube-cont">
              <div className="cubespinner">
                <div className="face1">
                  <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                </div>
                <div className="face2">
                  <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className="face3">
                  <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className="face4">
                  <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className="face5">
                  <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className="face6">
                  <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      
    </Container>
  )
}

export default About

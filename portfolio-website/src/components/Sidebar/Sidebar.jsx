import { useState, useEffect, useContext, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Sidebar.scss'

import LogoS from '../../assets/images/oxirgisi-b.png'
import SubLogo from '../../assets/images/bek.png'

import {
  faEnvelope,
  faHome,
  faCommentDollar,
  faUser,
  faCode,
  faNewspaper,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    const [eye, setEye] = useState(false)
  return (
    <aside className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo-s" />
        <img className="sub-logo" src={SubLogo} alt="logo-s" />
      </Link>

      <nav className="navbar_responsive">
        <NavLink exact="true" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" to="/about" className="about-link">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" to="/skills " className="skills-link">
          <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" to="/portfolio" className="portfolio-link">
          <FontAwesomeIcon icon={faLightbulb} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" to="/blog" className="blog-link">
          <FontAwesomeIcon icon={faNewspaper} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" to="/contact" className="contact-link">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <NavLink exact="true" to="#" className="contact-icons">
        <div
          onClick={() => {
            setEye(!eye)
          }}
        >
          <FontAwesomeIcon
            className="FontAwesomeIcon"
            icon={faCommentDollar}
            color="#4d4d4e"
          />
        </div>

        <div className={eye ? 'd-block' : 'd-none'}>
          <li>
            <a target="_blank" rel="noreffer" href="/">
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreffer" href="/">
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreffer" href="/">
              <FontAwesomeIcon icon={faTelegram} color="#4d4d4e" />
            </a>
          </li>
        </div>
      </NavLink>
      <ul className="ul">
        <li>
          <a target="_blank" rel="noreffer" href="/">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreffer" href="/">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreffer" href="/">
            <FontAwesomeIcon icon={faTelegram} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar

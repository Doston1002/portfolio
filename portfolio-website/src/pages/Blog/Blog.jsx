import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters'

import './Blog.scss'

const Blog = () => {
  const blogTitle = ['M', 'y', ' ', 'B', 'l', 'o', 'g']

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="container blog-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={blogTitle}
            idx={15}
          />
        </h1>
        <p>
          This is my first blog and I am a beginner in this field I will share
          with you the solutions to the problematic situations I have
          encountered. In sha Allah it will be useful
        </p>
      </div>
    </div>
  )
}

export default Blog

import { Route, Routes } from 'react-router-dom'

import './App.scss'

import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Skills from './pages/Skills/Skills'
import Portfolio from './pages/Portfolio/Portfolio'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App

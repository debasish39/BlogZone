import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs'
import Services from './pages/Services'
import Navbar from './components/Navbar'
import About from './pages/About'
import SingleBlog from './components/SingleBlog'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'
import NotFound from './pages/NotFound'

const Layout = () => {
  const location = useLocation()

  // Define paths where the footer should be shown
  const pathsWithFooter = [
    '/', '/about', '/contact', '/blogs', '/services'
  ]

  // Check if it's a valid path or not
  const showFooter = pathsWithFooter.some(path =>
    location.pathname === path || location.pathname.startsWith('/blogs/')
  )

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:id' element={<SingleBlog />} />
        <Route path='/services' element={<Services />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      {/* Only show footer on known routes */}
      {showFooter && <Footer />}
      <ScrollToTopButton />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

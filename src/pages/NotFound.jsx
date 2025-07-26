// src/pages/NotFound.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegSadTear, FaHome } from 'react-icons/fa'
import FuzzyText from '../components/FuzzyText'

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 animate-fade-in px-4">
      <div className="text-center w-full max-w-md mx-auto">
       

        {/* Fuzzy 404 text */}
        <div className="mb-6 flex items-center justify-center">
          <FuzzyText
            fontSize="clamp(6rem, 12vw, 10rem)"
            fontWeight={900}
            color="#f97316"
          >
            404
          </FuzzyText>
        </div>

        {/* Error message */}
        <p className="text-lg text-gray-600 mb-6">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        {/* Back Home Button with Icon */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 active:bg-orange-600 focus:bg-orange-600 transition duration-300"
        >
          <FaHome className="text-white text-lg" />
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.pageYOffset > 150);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-9 right-9 z-50 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition duration-300"
        aria-label="Scroll to top"
        style={{boxShadow:'3px 3px 39px rgba(255, 166, 0, 0.5)'}}
      >
        <FaArrowUp />
      </button>
    )
  );
}

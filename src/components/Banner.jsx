import React, { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function Banner() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className='bg-black text-white py-20 px-4'>
      <div
        className='max-w-6xl mx-auto text-center flex flex-col items-center justify-center pt-9'
        data-aos="fade-up"
      >
        <h1 className='text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-6'>
          Welcome to <span className='text-orange-500'>Our Blog Channel</span>
        </h1>

        <p
          className='text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mb-8'
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Discover articles, tutorials, and stories from our team. Dive into content that inspires, educates, and keeps you up to date.
        </p>

        
          <Link to='/blogs' className='flex items-center gap-2 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-300 text-white font-semibold px-6 py-3 rounded-full text-sm sm:text-base md:text-lg transition duration-300 group'
          data-aos="fade-up"
          data-aos-delay="200">
          Explore Blogs
          <FaArrowRight className='transition-transform duration-300 group-hover:translate-x-1 group-focus:translate-x-1 group-active:translate-x-1' />
        </Link>
      </div>
    </section>
  );
}
